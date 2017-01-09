import {
    Component,
    OnInit
} from '@angular/core';
import {Router} from "@angular/router";
import {ToastOptions} from "ng2-toasty";

import { AppConstants } from '../app.constants';
import {CustomToastyService} from "../components/services/custom-toasty.service";

@Component({
    selector: 'register',  // <register></register>
    // Our list of styles in our component. We may add more to compose many styles together
    styleUrls: ['../partials/log-reg.css'],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: '../partials/log-reg.html'
})
export class RegisterComponent implements OnInit {
    public userData = {
        email: null,
        password: null,
        role: 1
    };

    formType: string = 'register';
    EMAIL_PATTERN: string;

    // TypeScript public modifiers
    constructor(private router: Router,
                private appConstants: AppConstants,
                private customToastyService: CustomToastyService,) {
        this.EMAIL_PATTERN = '^' + appConstants.pattern.email + '$';
    }

    public register() {
        console.log('Register UserData: ', this.userData);
        let toastOptions: ToastOptions = {
            title: '注册信息',
            msg: '注册发送成功，等待通过。'
        };
        this.customToastyService.show('info', toastOptions);
        // this.router.navigate(['/module/dashboard']);
    }

    public ngOnInit() {
        console.log('hello `Register` component');
        // this.title.getData().subscribe(data => this.data = data);
    }
}
