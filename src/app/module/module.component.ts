import {
  Component,
  OnInit,
} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../components/services/authentication.service";
import {Locker} from "angular2-locker";
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'module',
  templateUrl: 'module.html',
})
export class ModuleComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthenticationService,
    private locker: Locker,
  ) {}

  public logout() {
    this.locker.remove('user');
    this.locker.remove('token');
  }

  public ngOnInit() {
    console.dir(this.auth.user);
    console.dir(this.locker.get('user'));
    console.log(this.locker.get('token'));
  }
}
