import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from '../dashboard/dashboard.component';
import { UserComponent }   from '../user/user.component';
import { AdminModuleComponent }   from '../adminModule/admin-module.component';
import { UserAddComponent }   from '../user/user-add.component';
import { UserEditComponent }   from '../user/user-edit.component';


export const adminRouting: Routes = [
  {
    path: 'admin',
    component: AdminModuleComponent,
    children: [
      {
        path: 'user',
        component: UserComponent,
        data: {PageTitle: 'User', page_name: 'user'}
      },
      {
        path: 'user/add',
        component: UserAddComponent,
        data: {PageTitle: 'User', page_name: 'user'}
      },
      {
        path: 'user/edit/:id',
        component: UserEditComponent,
        data: {PageTitle: 'User', page_name: 'user'}
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {PageTitle: 'Dashboard', page_name: 'dashboard'}
      }
    ]
  }
];

// export const adminRouting = RouterModule.forRoot(appRoutes, { useHash: true });
