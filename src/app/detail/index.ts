import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { Detail1Component } from './detail1.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

console.log('`Detail` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  { path: '', component: DetailComponent, pathMatch: 'full' },
  { path: '1', component: Detail1Component, pathMatch: 'full'},
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    DetailComponent,
    Detail1Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class DetailModule {
  public static routes = routes;
}
