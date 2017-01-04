import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './no-content';


export const ROUTES: Routes = [
  { path: 'detail', loadChildren: './detail/index#DetailModule'},
  { path: '**',    component: NoContentComponent },
];
