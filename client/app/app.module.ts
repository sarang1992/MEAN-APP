import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { LoginComponent }   from './components/login/login.component';
import { AdminModuleComponent }   from './components/adminModule/admin-module.component';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { SidebarComponent }   from './components/sidebar/sidebar.component';
import { UserComponent }   from './components/user/user.component';
import { UserAddComponent }   from './components/user/user-add.component';
import { UserEditComponent }   from './components/user/user-edit.component';

import { UserService }  from './services/user.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
    ],
  declarations: [
    AppComponent,
    LoginComponent,
    AdminModuleComponent,
    DashboardComponent,
    SidebarComponent,
    UserComponent,
    UserAddComponent,
    UserEditComponent
  ],
  providers: [
    UserService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
