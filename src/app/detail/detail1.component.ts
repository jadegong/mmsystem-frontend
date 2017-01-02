import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'detail1',
  template: `
    <h1>Hello from Detail1</h1>
  `,
})

export class Detail1Component implements OnInit {

  public ngOnInit() {
    console.log('hello `Detail1` component');
  }

}
