import {DashboardComponent} from "./dashboard";
import {ModuleComponent} from "./module.component";
import {Routes} from "@angular/router";
import {AuthGuard} from "../components/services/auth-guard.service";

export const ModuleRoutes: Routes = [
  {
    path: 'module', component: ModuleComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '', canActivateChild: [AuthGuard],
        children:[
          {path: '', component: DashboardComponent},
          {path: 'dashboard', component: DashboardComponent},
        ]
      }
    ]
  }
];
