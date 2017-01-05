import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'module',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'module.html',
})
export class ModuleComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `Module` component');
  }
}
