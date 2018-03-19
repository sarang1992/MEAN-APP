import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AdminModuleComponent }  from './admin-module.component';
// import { routing }       from './admin-module.routing';

import { DashboardComponent }   from '../dashboard/dashboard.component';
import { LoginComponent }   from '../login/login.component';
import { SidebarComponent }   from '../sidebar/sidebar.component';
import { UserComponent }   from '../user/user.component';
import { UserAddComponent }   from '../user/user-add.component';
import { UserEditComponent }   from '../user/user-edit.component';

import { UserService }  from '../../services/user.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
    ],
  declarations: [
    AdminModuleComponent,
    DashboardComponent,
    LoginComponent,
    SidebarComponent,
    UserComponent,
    UserAddComponent,
    UserEditComponent
  ],
  providers: [
    UserService
  ]
})
export class AdminModule { }
