import {
  Component,
  OnInit
} from '@angular/core';
import {Router} from "@angular/router";

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
    username: '',
    password: ''
  };
  // TypeScript public modifiers
  constructor(
    private router: Router
  ) {}

  public ngOnInit() {
    console.log('hello `Login` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public submitLogin() {
    console.log('UserData:\n', this.userData);
    this.router.navigate(['/home']);
  }
}
