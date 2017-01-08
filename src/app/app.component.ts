/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {Router} from "@angular/router";
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    '../../node_modules/bootstrap/dist/css/bootstrap.css',
    './app.css',
  ],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  // public angularclassLogo = 'assets/img/angularclass-avatar.png';
  // public name = 'Angular 2 Webpack Starter';
  public url = 'https://github.com/jadegong';

  constructor(
    public appState: AppState,
    public router: Router,
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}
