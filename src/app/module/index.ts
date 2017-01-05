import { CommonModule } from '@angular/common';
import { ModuleComponent } from './module.component';
import { DashboardComponent } from './dashboard'
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

console.log('`Module` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  { path: '', component: ModuleComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', useAsDefault: true }
];

@NgModule({
  bootstrap: [ ModuleComponent ],
  declarations: [
    // Components / Directives/ Pipes
    ModuleComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class ModuleModule {
  public static routes = routes;
}
