import {
  Component,
  OnInit
} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../components/services/authentication.service";

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'login',  // <login></login>
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './login.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './login.html'
})
export class LoginComponent implements OnInit {
  // Set our default values
  public userData = {
    name: null,
    password: null,
    role: 1
  };

  message: string;

  // TypeScript public modifiers
  constructor(
    public router: Router,
    public auth: AuthenticationService,
  ) {
    this.setMessage();
  }

  setMessage(...msg) {
    if (msg) {
      this.message = msg[0];
      return;
    }
    this.message = 'Logged ' + (this.auth.user.name ? 'in' : 'out');
  }

  public login() {
    console.log('UserData: ', this.userData);
    this.setMessage('Trying to login');
    this.auth.fill = this.userData;
    this.router.navigate(['/module/dashboard']);
  }

  public ngOnInit() {
    console.log('hello `Login` component');
    // this.title.getData().subscribe(data => this.data = data);
  }
}
