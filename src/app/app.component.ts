/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {Router} from "@angular/router";
import {ToastOptions} from "ng2-toasty";

import { AppState } from './app.service';
import {CustomToastyService} from "./components/services/custom-toasty.service";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    '../../node_modules/bootstrap/dist/css/bootstrap.css', //bootstrap styles
    '../../node_modules/font-awesome/css/font-awesome.css',
    '../../node_modules/ng2-toasty/style-default.css', //ng2-toasty default theme styles
    './app.css', //self defined global styles
  ],
  template: `
    <router-outlet></router-outlet>
    <ng2-toasty [position]="'top-right'"></ng2-toasty>
  `
})
export class AppComponent implements OnInit {
  // public angularclassLogo = 'assets/img/angularclass-avatar.png';
  // public name = 'Angular 2 Webpack Starter';
  public url = 'https://github.com/jadegong';

  constructor(
    public appState: AppState,
    public router: Router,
    private toastyService: CustomToastyService,
    private toastOptions: ToastOptions,
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
    this.toastOptions = {title: 'Test Toasty'};
    this.toastyService.show('default', this.toastOptions);
  }
}
