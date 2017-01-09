import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  // createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
import {LockerModule, LockerConfig, DRIVERS} from "angular2-locker";
import {ToastyModule, ToastOptions} from "ng2-toasty";

// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { NoContentComponent } from './no-content';
import { XLargeDirective } from './home/x-large';
import {AuthenticationService} from "./components/services/authentication.service";
import {AuthGuard} from "./components/services/auth-guard.service";
import {ModuleModule} from "./module/index";
import {AppConstants} from "./app.constants";
import {CustomToastyService} from "./components/services/custom-toasty.service";

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  // restoreInputValues: () => void,
  disposeOldHosts: () => void
};

const lockerConfig = new LockerConfig('mm-system', DRIVERS.SESSION, '-');

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NoContentComponent,
    XLargeDirective
  ],
  imports: [ // import Angular's module
    ModuleModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    LockerModule.forRoot(lockerConfig),
    ToastyModule.forRoot(),
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    AuthenticationService,
    AuthGuard,
    AppConstants,
    ToastOptions,
    CustomToastyService,
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) {}

  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    // if ('restoreInputValues' in store) {
    //   let restoreInputValues = store.restoreInputValues;
    //   setTimeout(restoreInputValues);
    // }

    this.appRef.tick();
    delete store.state;
    // delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    // store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
