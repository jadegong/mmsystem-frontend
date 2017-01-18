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
import {UserService} from "../components/services/user.service";

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
    private userService: UserService,
  ) {
    this.EMAIL_PATTERN = '^' + appConstants.pattern.email + '$';
  }

  public login() {
    console.log('Login UserData: ', this.userData);
    let _this = this;
    let toastOptions: ToastOptions = {title: '登录信息'};
    let toastType = 'info';
    this.userService.login(this.userData)
      .finally(() => {
        _this.customToastyService.show(toastType, toastOptions);
        if (toastType !== 'error') {
          _this.router.navigate(['/module/dashboard']);
        }
      })
      .subscribe(
        (data) => {
          _this.auth.fill = data;
          _this.locker.set('user', data.user);
          _this.locker.set('token', data.token);
          toastOptions.msg = '登录成功，跳转至首页！';
        },
        (error) => {
          toastType = 'error';
          toastOptions.msg = '登录失败，请稍后再试！';
        }
      );
  }

  public ngOnInit() {
    console.log('hello `Login` component');
    // this.title.getData().subscribe(data => this.data = data);
  }
}
