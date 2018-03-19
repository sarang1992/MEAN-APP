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
var user_service_1 = require("../../services/user.service");
var user_1 = require("../../models/user");
var router_1 = require("@angular/router");
var UserAddComponent = (function () {
    function UserAddComponent(userService, route) {
        this.userService = userService;
        this.route = route;
        this.newUser = false;
        this.navigated = false; // true if navigated here
    }
    UserAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            if (id === 'new') {
                _this.newUser = true;
                _this.user = new user_1.User();
            }
            else {
                _this.newUser = false;
                _this.userService.getUser(id)
                    .then(function (user) { return _this.user = user; });
            }
        });
    };
    UserAddComponent.prototype.save = function () {
        var _this = this;
        this.userService
            .save(this.user)
            .then(function (user) {
            _this.user = user; // saved user, w/ id if new
            _this.goBack();
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    UserAddComponent.prototype.goBack = function () {
        window.history.back();
    };
    return UserAddComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], UserAddComponent.prototype, "user", void 0);
UserAddComponent = __decorate([
    core_1.Component({
        selector: 'app-user-add',
        templateUrl: './app/components/user/user-add.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.ActivatedRoute])
], UserAddComponent);
exports.UserAddComponent = UserAddComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3VzZXIvdXNlci1hZGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXVEO0FBQ3ZELDREQUF3RDtBQUN4RCwwQ0FBdUM7QUFDdkMsMENBQXlEO0FBT3pELElBQWEsZ0JBQWdCO0lBT3pCLDBCQUFvQixXQUF3QixFQUFTLEtBQXFCO1FBQXRELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFMMUUsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVoQixjQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMseUJBQXlCO0lBR2lDLENBQUM7SUFFOUUsbUNBQVEsR0FBUjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBYztZQUNyQyxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztZQUMzQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztxQkFDdkIsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLENBQUMsQ0FBQztZQUN4QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsK0JBQUksR0FBSjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLFdBQVc7YUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNmLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDTixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLDJCQUEyQjtZQUM3QyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLENBQUMsQ0FBQyxDQUFDLDhCQUE4QjtJQUMzRSxDQUFDO0lBRUQsaUNBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FwQ0EsQUFvQ0MsSUFBQTtBQW5DWTtJQUFSLFlBQUssRUFBRTs4QkFBTyxXQUFJOzhDQUFDO0FBRFgsZ0JBQWdCO0lBTDVCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsY0FBYztRQUN4QixXQUFXLEVBQUUsK0NBQStDO0tBQy9ELENBQUM7cUNBU21DLDBCQUFXLEVBQWdCLHVCQUFjO0dBUGpFLGdCQUFnQixDQW9DNUI7QUFwQ1ksNENBQWdCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3VzZXIvdXNlci1hZGQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3VzZXJcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC11c2VyLWFkZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL3VzZXIvdXNlci1hZGQuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgVXNlckFkZENvbXBvbmVudCB7XG4gICAgQElucHV0KCkgdXNlcjogVXNlcjtcbiAgICBuZXdVc2VyID0gZmFsc2U7XG4gICAgZXJyb3I6IGFueTtcbiAgICBuYXZpZ2F0ZWQgPSBmYWxzZTsgLy8gdHJ1ZSBpZiBuYXZpZ2F0ZWQgaGVyZVxuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5mb3JFYWNoKChwYXJhbXM6IFBhcmFtcykgPT4ge1xuICAgICAgICAgICAgbGV0IGlkID0gcGFyYW1zWydpZCddO1xuICAgICAgICAgICAgaWYgKGlkID09PSAnbmV3Jykge1xuICAgICAgICAgICAgICAgIHRoaXMubmV3VXNlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXdVc2VyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5nZXRVc2VyKGlkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbih1c2VyID0+IHRoaXMudXNlciA9IHVzZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzYXZlKCkge1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlXG4gICAgICAgICAgICAuc2F2ZSh0aGlzLnVzZXIpXG4gICAgICAgICAgICAudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSB1c2VyOyAvLyBzYXZlZCB1c2VyLCB3LyBpZCBpZiBuZXdcbiAgICAgICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB0aGlzLmVycm9yID0gZXJyb3IpOyAvLyBUT0RPOiBEaXNwbGF5IGVycm9yIG1lc3NhZ2VcbiAgICB9XG5cbiAgICBnb0JhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG59XG4iXX0=
