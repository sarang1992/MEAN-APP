"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_component_1 = require("../dashboard/dashboard.component");
var user_component_1 = require("../user/user.component");
var admin_module_component_1 = require("../adminModule/admin-module.component");
var user_add_component_1 = require("../user/user-add.component");
var user_edit_component_1 = require("../user/user-edit.component");
exports.adminRouting = [
    {
        path: 'admin',
        component: admin_module_component_1.AdminModuleComponent,
        children: [
            {
                path: 'user',
                component: user_component_1.UserComponent,
                data: { PageTitle: 'User', page_name: 'user' }
            },
            {
                path: 'user/add',
                component: user_add_component_1.UserAddComponent,
                data: { PageTitle: 'User', page_name: 'user' }
            },
            {
                path: 'user/edit/:id',
                component: user_edit_component_1.UserEditComponent,
                data: { PageTitle: 'User', page_name: 'user' }
            },
            {
                path: 'dashboard',
                component: dashboard_component_1.DashboardComponent,
                data: { PageTitle: 'Dashboard', page_name: 'dashboard' }
            }
        ]
    }
];
// export const adminRouting = RouterModule.forRoot(appRoutes, { useHash: true });

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FkbWluTW9kdWxlL2FkbWluLW1vZHVsZS5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsd0VBQXdFO0FBQ3hFLHlEQUF5RDtBQUN6RCxnRkFBK0U7QUFDL0UsaUVBQWdFO0FBQ2hFLG1FQUFrRTtBQUdyRCxRQUFBLFlBQVksR0FBVztJQUNsQztRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsU0FBUyxFQUFFLDZDQUFvQjtRQUMvQixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixTQUFTLEVBQUUsOEJBQWE7Z0JBQ3hCLElBQUksRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQzthQUM3QztZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUscUNBQWdCO2dCQUMzQixJQUFJLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUM7YUFDN0M7WUFDRDtnQkFDRSxJQUFJLEVBQUUsZUFBZTtnQkFDckIsU0FBUyxFQUFFLHVDQUFpQjtnQkFDNUIsSUFBSSxFQUFFLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDO2FBQzdDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFNBQVMsRUFBRSx3Q0FBa0I7Z0JBQzdCLElBQUksRUFBRSxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBQzthQUN2RDtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsa0ZBQWtGIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FkbWluTW9kdWxlL2FkbWluLW1vZHVsZS5yb3V0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSAgIGZyb20gJy4uL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJDb21wb25lbnQgfSAgIGZyb20gJy4uL3VzZXIvdXNlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRtaW5Nb2R1bGVDb21wb25lbnQgfSAgIGZyb20gJy4uL2FkbWluTW9kdWxlL2FkbWluLW1vZHVsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlckFkZENvbXBvbmVudCB9ICAgZnJvbSAnLi4vdXNlci91c2VyLWFkZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlckVkaXRDb21wb25lbnQgfSAgIGZyb20gJy4uL3VzZXIvdXNlci1lZGl0LmNvbXBvbmVudCc7XG5cblxuZXhwb3J0IGNvbnN0IGFkbWluUm91dGluZzogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJ2FkbWluJyxcbiAgICBjb21wb25lbnQ6IEFkbWluTW9kdWxlQ29tcG9uZW50LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICd1c2VyJyxcbiAgICAgICAgY29tcG9uZW50OiBVc2VyQ29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7UGFnZVRpdGxlOiAnVXNlcicsIHBhZ2VfbmFtZTogJ3VzZXInfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ3VzZXIvYWRkJyxcbiAgICAgICAgY29tcG9uZW50OiBVc2VyQWRkQ29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7UGFnZVRpdGxlOiAnVXNlcicsIHBhZ2VfbmFtZTogJ3VzZXInfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ3VzZXIvZWRpdC86aWQnLFxuICAgICAgICBjb21wb25lbnQ6IFVzZXJFZGl0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7UGFnZVRpdGxlOiAnVXNlcicsIHBhZ2VfbmFtZTogJ3VzZXInfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2Rhc2hib2FyZCcsXG4gICAgICAgIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7UGFnZVRpdGxlOiAnRGFzaGJvYXJkJywgcGFnZV9uYW1lOiAnZGFzaGJvYXJkJ31cbiAgICAgIH1cbiAgICBdXG4gIH1cbl07XG5cbi8vIGV4cG9ydCBjb25zdCBhZG1pblJvdXRpbmcgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMsIHsgdXNlSGFzaDogdHJ1ZSB9KTtcbiJdfQ==
