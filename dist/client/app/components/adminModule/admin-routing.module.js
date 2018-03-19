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
var admin_module_component_1 = require("./admin-module.component");
// import { routing }       from './admin-module.routing';
var dashboard_component_1 = require("../dashboard/dashboard.component");
var login_component_1 = require("../login/login.component");
var sidebar_component_1 = require("../sidebar/sidebar.component");
var user_component_1 = require("../user/user.component");
var user_add_component_1 = require("../user/user-add.component");
var user_edit_component_1 = require("../user/user-edit.component");
var user_service_1 = require("../../services/user.service");
var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule
        ],
        declarations: [
            admin_module_component_1.AdminModuleComponent,
            dashboard_component_1.DashboardComponent,
            login_component_1.LoginComponent,
            sidebar_component_1.SidebarComponent,
            user_component_1.UserComponent,
            user_add_component_1.UserAddComponent,
            user_edit_component_1.UserEditComponent
        ],
        providers: [
            user_service_1.UserService
        ]
    })
], AdminModule);
exports.AdminModule = AdminModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FkbWluTW9kdWxlL2FkbWluLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQThDO0FBQzlDLDhEQUEwRDtBQUMxRCx3Q0FBZ0Q7QUFDaEQsc0NBQStDO0FBRy9DLG1FQUFpRTtBQUNqRSwwREFBMEQ7QUFFMUQsd0VBQXdFO0FBQ3hFLDREQUE0RDtBQUM1RCxrRUFBa0U7QUFDbEUseURBQXlEO0FBQ3pELGlFQUFnRTtBQUNoRSxtRUFBa0U7QUFFbEUsNERBQTJEO0FBcUIzRCxJQUFhLFdBQVc7SUFBeEI7SUFBMkIsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBM0IsQUFBNEIsSUFBQTtBQUFmLFdBQVc7SUFuQnZCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLGdDQUFhO1lBQ2IsaUJBQVU7WUFDVixtQkFBVztTQUNWO1FBQ0gsWUFBWSxFQUFFO1lBQ1osNkNBQW9CO1lBQ3BCLHdDQUFrQjtZQUNsQixnQ0FBYztZQUNkLG9DQUFnQjtZQUNoQiw4QkFBYTtZQUNiLHFDQUFnQjtZQUNoQix1Q0FBaUI7U0FDbEI7UUFDRCxTQUFTLEVBQUU7WUFDVCwwQkFBVztTQUNaO0tBQ0YsQ0FBQztHQUNXLFdBQVcsQ0FBSTtBQUFmLGtDQUFXIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FkbWluTW9kdWxlL2FkbWluLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gICAgIGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBZG1pbk1vZHVsZUNvbXBvbmVudCB9ICBmcm9tICcuL2FkbWluLW1vZHVsZS5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgcm91dGluZyB9ICAgICAgIGZyb20gJy4vYWRtaW4tbW9kdWxlLnJvdXRpbmcnO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSAgIGZyb20gJy4uL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gICBmcm9tICcuLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZWJhckNvbXBvbmVudCB9ICAgZnJvbSAnLi4vc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyQ29tcG9uZW50IH0gICBmcm9tICcuLi91c2VyL3VzZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJBZGRDb21wb25lbnQgfSAgIGZyb20gJy4uL3VzZXIvdXNlci1hZGQuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJFZGl0Q29tcG9uZW50IH0gICBmcm9tICcuLi91c2VyL3VzZXItZWRpdC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9ICBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBIdHRwTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQWRtaW5Nb2R1bGVDb21wb25lbnQsXG4gICAgRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIFNpZGViYXJDb21wb25lbnQsXG4gICAgVXNlckNvbXBvbmVudCxcbiAgICBVc2VyQWRkQ29tcG9uZW50LFxuICAgIFVzZXJFZGl0Q29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFVzZXJTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQWRtaW5Nb2R1bGUgeyB9XG4iXX0=
