"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var login_component_1 = require("./components/login/login.component");
var admin_module_component_1 = require("./components/adminModule/admin-module.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var sidebar_component_1 = require("./components/sidebar/sidebar.component");
var user_component_1 = require("./components/user/user.component");
var user_add_component_1 = require("./components/user/user-add.component");
var user_edit_component_1 = require("./components/user/user-edit.component");
var user_service_1 = require("./services/user.service");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            admin_module_component_1.AdminModuleComponent,
            dashboard_component_1.DashboardComponent,
            sidebar_component_1.SidebarComponent,
            user_component_1.UserComponent,
            user_add_component_1.UserAddComponent,
            user_edit_component_1.UserEditComponent
        ],
        providers: [
            user_service_1.UserService,
            cookies_service_1.CookieService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQThDO0FBQzlDLDhEQUEwRDtBQUMxRCx3Q0FBZ0Q7QUFDaEQsc0NBQStDO0FBRy9DLGlEQUFnRDtBQUNoRCw2Q0FBOEM7QUFFOUMsc0VBQXNFO0FBQ3RFLDBGQUF5RjtBQUV6RixrRkFBa0Y7QUFDbEYsNEVBQTRFO0FBQzVFLG1FQUFtRTtBQUNuRSwyRUFBMEU7QUFDMUUsNkVBQTRFO0FBRTVFLHdEQUF1RDtBQUN2RCw0RUFBeUU7QUF5QnpFLElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsU0FBUztJQXZCckIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsZ0NBQWE7WUFDYixpQkFBVTtZQUNWLG1CQUFXO1lBQ1gscUJBQU87U0FDTjtRQUNILFlBQVksRUFBRTtZQUNaLDRCQUFZO1lBQ1osZ0NBQWM7WUFDZCw2Q0FBb0I7WUFDcEIsd0NBQWtCO1lBQ2xCLG9DQUFnQjtZQUNoQiw4QkFBYTtZQUNiLHFDQUFnQjtZQUNoQix1Q0FBaUI7U0FDbEI7UUFDRCxTQUFTLEVBQUU7WUFDVCwwQkFBVztZQUNYLCtCQUFhO1NBQ2Q7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzFCLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsImZpbGUiOiJhcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9ICAgICBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyByb3V0aW5nIH0gICAgICAgZnJvbSAnLi9hcHAucm91dGluZyc7XG5cbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gICBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IEFkbWluTW9kdWxlQ29tcG9uZW50IH0gICBmcm9tICcuL2NvbXBvbmVudHMvYWRtaW5Nb2R1bGUvYWRtaW4tbW9kdWxlLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9ICAgZnJvbSAnLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJDb21wb25lbnQgfSAgIGZyb20gJy4vY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJDb21wb25lbnQgfSAgIGZyb20gJy4vY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJBZGRDb21wb25lbnQgfSAgIGZyb20gJy4vY29tcG9uZW50cy91c2VyL3VzZXItYWRkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyRWRpdENvbXBvbmVudCB9ICAgZnJvbSAnLi9jb21wb25lbnRzL3VzZXIvdXNlci1lZGl0LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gIGZyb20gJy4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1jb29raWUvc2VydmljZXMvY29va2llcy5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgSHR0cE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICByb3V0aW5nXG4gICAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIEFkbWluTW9kdWxlQ29tcG9uZW50LFxuICAgIERhc2hib2FyZENvbXBvbmVudCxcbiAgICBTaWRlYmFyQ29tcG9uZW50LFxuICAgIFVzZXJDb21wb25lbnQsXG4gICAgVXNlckFkZENvbXBvbmVudCxcbiAgICBVc2VyRWRpdENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBVc2VyU2VydmljZSxcbiAgICBDb29raWVTZXJ2aWNlXG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19
