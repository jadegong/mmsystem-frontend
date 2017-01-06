import {
  Component,
  OnInit, OnDestroy,
} from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'detail',
  template: `
    <h1>Hello from Detail</h1>
    <router-outlet></router-outlet>
  `,
})
export class DetailComponent implements OnInit, OnDestroy {

  public ngOnInit() {
    console.log('hello `Detail` component');
  }

  public ngOnDestroy() {}

}
