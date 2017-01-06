import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { ModuleComponent } from './module.component';
import { DashboardComponent } from './dashboard'
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ModuleRoutes } from './module.routes';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    ModuleComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ModuleRoutes),
  ]
})
export class ModuleModule {}
