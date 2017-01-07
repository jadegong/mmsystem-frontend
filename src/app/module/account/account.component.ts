import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'module-account',
  template: '<div>account</div>',
})
export class AccountComponent implements OnInit {
  constructor() {}

  public ngOnInit() {
    console.log('Hello `account` component');
  }
}
