import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'module', loadChildren: './module/index#ModuleModule' },
  // { path: 'detail', loadChildren: './detail/index#DetailModule'},
  { path: '**', component: NoContentComponent },
];
