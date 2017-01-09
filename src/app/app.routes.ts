import { Routes } from '@angular/router';
import {NoContentComponent} from "./no-content";
import {Ng2StateDeclaration} from "ui-router-ng2";
import {LoginComponent} from "./login";
import {RegisterComponent} from './register';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  // {path: 'module', loadChildren: './module/index#ModuleModule', canActivate: [AuthGuard]},
  {path: '**', component: NoContentComponent}
];
