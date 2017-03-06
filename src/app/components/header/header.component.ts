/**
 * Created by jade on 2017/3/6.
 */
import {
  Component, Input,
} from '@angular/core';

@Component({
  selector: 'module-header',  // <module-header></module-header>
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './header.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './header.html'
})
export class HeaderComponent {
  // Set our default values
  @Input()
  navs: Array<Object>;
  // TypeScript public modifiers
  constructor() {}
}
