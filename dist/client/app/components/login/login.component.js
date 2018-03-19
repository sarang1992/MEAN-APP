"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../../services/user.service");
var http_1 = require("@angular/http");
// import 'rxjs/add/operator/toPromise';
require("rxjs/add/operator/map");
// import { CookieService } from 'ngx-cookie-service';
var core_2 = require("angular2-cookie/core");
var LoginComponent = (function () {
    function LoginComponent(router, userService, http, cookieService) {
        this.router = router;
        this.userService = userService;
        this.http = http;
        this.cookieService = cookieService;
        this.bool = false;
        // user: User;
        // @Input() user: User;
        this.user = {};
        // this.user.v_name = '';
        // this.user.v_pwd = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.getHeroes();
        this.bool = false;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.user);
        this.http.post('login', this.user).map(function (response) { return response.json(); }).subscribe(function (data) {
            console.log(data);
            if (data.status == 'success') {
                _this.cookieService.put('role', data.user.role);
                _this.router.navigate(['/admin/user']);
            }
            else {
                _this.bool = true;
                console.log(_this.bool);
            }
        });
        // this.userService
        //     .login(this.user)
        //     .then(result => { 
        //         console.log(result);
        //         this.router.navigate(['/user']);
        //     })
        //     .catch(error => this.error = error);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: './app/components/login/login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, http_1.Http, core_2.CookieService])
], LoginComponent);
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUF1RDtBQUV2RCwwQ0FBeUM7QUFDekMsNERBQXdEO0FBQ3hELHNDQUF3RDtBQUN4RCx3Q0FBd0M7QUFDeEMsaUNBQStCO0FBQy9CLHNEQUFzRDtBQUN0RCw2Q0FBbUQ7QUFPbkQsSUFBYSxjQUFjO0lBUXZCLHdCQUFvQixNQUFjLEVBQVMsV0FBd0IsRUFBVSxJQUFVLEVBQVUsYUFBMkI7UUFBeEcsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBTDVILFNBQUksR0FBWSxLQUFLLENBQUM7UUFDdEIsY0FBYztRQUNkLHVCQUF1QjtRQUV2QixTQUFJLEdBQVEsRUFBRSxDQUFDO1FBRVgseUJBQXlCO1FBQ3pCLHdCQUF3QjtJQUM1QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUFBLGlCQXNCQztRQXJCRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBRTlFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDRixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsbUJBQW1CO1FBQ25CLHdCQUF3QjtRQUN4Qix5QkFBeUI7UUFDekIsK0JBQStCO1FBQy9CLDJDQUEyQztRQUMzQyxTQUFTO1FBQ1QsMkNBQTJDO0lBQy9DLENBQUM7SUFFTCxxQkFBQztBQUFELENBMUNBLEFBMENDLElBQUE7QUExQ1ksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLDZDQUE2QztLQUM3RCxDQUFDO3FDQVU4QixlQUFNLEVBQXNCLDBCQUFXLEVBQWdCLFdBQUksRUFBd0Isb0JBQWE7R0FSbkgsY0FBYyxDQTBDMUI7QUExQ1ksd0NBQWMiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3VzZXJcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuLy8gaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XG5pbXBvcnQge0Nvb2tpZVNlcnZpY2V9IGZyb20gJ2FuZ3VsYXIyLWNvb2tpZS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBlcnJvcjogYW55O1xuICAgIGJvb2w6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvLyB1c2VyOiBVc2VyO1xuICAgIC8vIEBJbnB1dCgpIHVzZXI6IFVzZXI7XG4gICAgXG4gICAgdXNlcjogYW55ID0ge307XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGNvb2tpZVNlcnZpY2U6Q29va2llU2VydmljZSkgeyBcbiAgICAgICAgLy8gdGhpcy51c2VyLnZfbmFtZSA9ICcnO1xuICAgICAgICAvLyB0aGlzLnVzZXIudl9wd2QgPSAnJztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy8gdGhpcy5nZXRIZXJvZXMoKTtcbiAgICAgICAgdGhpcy5ib29sID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlcik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmh0dHAucG9zdCgnbG9naW4nLCB0aGlzLnVzZXIpLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnN1YnNjcmliZShkYXRhID0+e1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UucHV0KCdyb2xlJyxkYXRhLnVzZXIucm9sZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYWRtaW4vdXNlciddKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuYm9vbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ib29sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLnVzZXJTZXJ2aWNlXG4gICAgICAgIC8vICAgICAubG9naW4odGhpcy51c2VyKVxuICAgICAgICAvLyAgICAgLnRoZW4ocmVzdWx0ID0+IHsgXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy91c2VyJ10pO1xuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gICAgIC5jYXRjaChlcnJvciA9PiB0aGlzLmVycm9yID0gZXJyb3IpO1xuICAgIH1cblxufVxuIl19
