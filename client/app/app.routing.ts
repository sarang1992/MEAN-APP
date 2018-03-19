import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }   from './components/login/login.component';
import { adminRouting }   from './components/adminModule/admin-module.routing';;

const appRoutes: Routes = [
  ...adminRouting,
  {path: '', component: LoginComponent},
  {path: '**', redirectTo: '/',pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: false });
