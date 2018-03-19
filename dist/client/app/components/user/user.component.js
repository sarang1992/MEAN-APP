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
/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
var core_1 = require("@angular/core");
var user_service_1 = require("../../services/user.service");
var router_1 = require("@angular/router");
// import { CookieService } from 'ngx-cookie-service';
var core_2 = require("angular2-cookie/core");
var UserComponent = (function () {
    function UserComponent(router, userService, cookie) {
        this.router = router;
        this.userService = userService;
        this.cookie = cookie;
    }
    UserComponent.prototype.getUseres = function () {
        var _this = this;
        this.userService.getUseres().then(function (useres) { return _this.useres = useres; });
    };
    UserComponent.prototype.ngOnInit = function () {
        this.getUseres();
    };
    UserComponent.prototype.gotoEdit = function (id) {
        this.router.navigate(['/admin/user/edit', id]);
    };
    UserComponent.prototype.addUser = function () {
        // this.selectedUser = null;
        this.router.navigate(['/admin/user', 'add']);
    };
    UserComponent.prototype.deleteUser = function (user, event) {
        var _this = this;
        event.stopPropagation();
        this.userService
            .delete(user)
            .then(function (res) {
            _this.useres = _this.useres.filter(function (h) { return h !== user; });
            if (_this.selectedUser === user) {
                _this.selectedUser = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'app-user',
        templateUrl: './app/components/user/user.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        user_service_1.UserService,
        core_2.CookieService])
], UserComponent);
exports.UserComponent = UserComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3VzZXIvdXNlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHNDQUFnRDtBQUNoRCw0REFBd0Q7QUFFeEQsMENBQXlDO0FBQ3pDLHNEQUFzRDtBQUN0RCw2Q0FBcUQ7QUFPckQsSUFBYSxhQUFhO0lBTXRCLHVCQUNZLE1BQWMsRUFDZCxXQUF3QixFQUN4QixNQUFxQjtRQUZyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUFJLENBQUM7SUFDdEMsaUNBQVMsR0FBVDtRQUFBLGlCQUVDO1FBREcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsRUFBTTtRQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNJLDRCQUE0QjtRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsSUFBVSxFQUFFLEtBQVU7UUFBakMsaUJBU0M7UUFSRyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVc7YUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ1osSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNMLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssSUFBSSxFQUFWLENBQVUsQ0FBQyxDQUFDO1lBQ2xELEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFBQyxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQXBDQSxBQW9DQyxJQUFBO0FBcENZLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSwyQ0FBMkM7S0FDM0QsQ0FBQztxQ0FTc0IsZUFBTTtRQUNELDBCQUFXO1FBQ2hCLG9CQUFhO0dBVHhCLGFBQWEsQ0FvQ3pCO0FBcENZLHNDQUFhIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3VzZXIvdXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTW9pei5LYWNod2FsYSBvbiAwMi0wNi0yMDE2LlxuICovXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uLy4uL21vZGVscy91c2VyXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLy8gaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItY29va2llL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC11c2VyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIFVzZXJDb21wb25lbnQge1xuICAgIFxuICAgIHVzZXJlczogVXNlcltdO1xuICAgIGVycm9yOiBhbnk7XG4gICAgc2VsZWN0ZWRVc2VyOiBVc2VyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGNvb2tpZTogQ29va2llU2VydmljZSkgeyB9XG4gICAgZ2V0VXNlcmVzKCkge1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldFVzZXJlcygpLnRoZW4odXNlcmVzID0+IHRoaXMudXNlcmVzID0gdXNlcmVzKTtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0VXNlcmVzKCk7XG4gICAgfVxuXG4gICAgZ290b0VkaXQoaWQ6YW55KSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FkbWluL3VzZXIvZWRpdCcsIGlkXSk7XG4gICAgfVxuXG4gICAgYWRkVXNlcigpIHtcbiAgICAgICAgLy8gdGhpcy5zZWxlY3RlZFVzZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hZG1pbi91c2VyJywgJ2FkZCddKTtcbiAgICB9XG5cbiAgICBkZWxldGVVc2VyKHVzZXI6IFVzZXIsIGV2ZW50OiBhbnkpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2VcbiAgICAgICAgICAgIC5kZWxldGUodXNlcilcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyZXMgPSB0aGlzLnVzZXJlcy5maWx0ZXIoaCA9PiBoICE9PSB1c2VyKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFVzZXIgPT09IHVzZXIpIHsgdGhpcy5zZWxlY3RlZFVzZXIgPSBudWxsOyB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMuZXJyb3IgPSBlcnJvcik7XG4gICAgfVxufVxuIl19
