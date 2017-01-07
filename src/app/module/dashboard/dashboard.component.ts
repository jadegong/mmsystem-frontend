import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'module-dashboard',  // <dashboard></dashboard>
  // Our list of styles in our component. We may add more to compose many styles together
  // styleUrls: [ './dashboard.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit {
  // Set our default values
  // public userData = {
  //   username: null,
  //   password: null
  // };
  // TypeScript public modifiers
  constructor() {}

  public ngOnInit() {
    console.log('hello `Dashboard` component');
  }
}
