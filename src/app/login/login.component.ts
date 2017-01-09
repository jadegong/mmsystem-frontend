import {
  Component,
  OnInit
} from '@angular/core';
import {Router} from "@angular/router";
import {Locker} from "angular2-locker";
import {ToastOptions} from "ng2-toasty";

import {AuthenticationService} from "../components/services/authentication.service";
import { AppConstants } from '../app.constants';
import {CustomToastyService} from "../components/services/custom-toasty.service";

@Component({
  selector: 'login',  // <login></login>
  styleUrls: [ '../partials/log-reg.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: '../partials/log-reg.html'
})
export class LoginComponent implements OnInit {
  // Set our default values
  public userData = {
    email: null,
    name: null,
    password: null,
    role: 1
  };

  formType: string = 'login';
  EMAIL_PATTERN: string;

  // TypeScript public modifiers
  constructor(
    private router: Router,
    private auth: AuthenticationService,
    private locker: Locker,
    private appConstants: AppConstants,
    private customToastyService: CustomToastyService,
  ) {
    this.EMAIL_PATTERN = '^' + appConstants.pattern.email + '$';
  }

  public login() {
    console.log('Login UserData: ', this.userData);
    this.auth.fill = this.userData;
    this.locker.set('user', this.userData);
    this.locker.set('token', this.userData.email);
    // let toastOptions: ToastOptions = {title: 'Login info'};
    // this.customToastyService.show('default', toastOptions);
    this.router.navigate(['/module/dashboard']);
  }

  public ngOnInit() {
    console.log('hello `Login` component');
    // this.title.getData().subscribe(data => this.data = data);
  }
}
