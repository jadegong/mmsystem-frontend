import {Injectable} from "@angular/core";
import {ToastyService, ToastOptions, ToastData} from "ng2-toasty";
import * as $ from 'jquery';

@Injectable()
export class CustomToastyService {
    private toastOptions: ToastOptions = {
        title: 'Some info',
        msg: 'This is default message.',
        showClose: true,
        theme: 'default',
        timeout: 3000,
        onAdd: (toast: ToastData) => {},
        onRemove: (toast: ToastData) => {},
    };

    constructor(
        private _toastyService: ToastyService,
    ) {}

    public get toastyService(): ToastyService {
        return this._toastyService;
    }

    public show(toastyType: string, customOptions: ToastOptions) {
        let options: ToastOptions = $.extend({}, this.toastOptions, customOptions);
        switch (toastyType) {
            case 'default':
                this.toastyService.default(options);
                break;
            case 'info':
                this.toastyService.info(options);
                break;
            case 'success':
                this.toastyService.success(options);
                break;
            case 'wait':
                this.toastyService.wait(options);
                break;
            case 'error':
                this.toastyService.error(options);
                break;
            case 'warning':
                this.toastyService.warning(options);
                break;
        }
    }
}
