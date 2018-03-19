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
// import {HeroService} from "../../services/hero.service";
// import {Hero} from "../../models/hero";
var router_1 = require("@angular/router");
var SidebarComponent = (function () {
    function SidebarComponent(router) {
        var _this = this;
        this.router = router;
        this.router.events.subscribe(function (event) {
            if (event.constructor.name === "NavigationEnd") {
                _this.page_name = _this.getPageName(_this.router.routerState, _this.router.routerState.root).join('-');
            }
        });
    }
    SidebarComponent.prototype.getPageName = function (state, parent) {
        var data = [];
        if (parent && parent.snapshot.data && parent.snapshot.data.page_name) {
            data.push(parent.snapshot.data.page_name);
        }
        if (state && parent) {
            data.push.apply(data, this.getPageName(state, state.firstChild(parent)));
        }
        return data;
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    core_1.Component({
        selector: 'app-sidebar',
        templateUrl: './app/components/sidebar/sidebar.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHNDQUFnRDtBQUNoRCwyREFBMkQ7QUFDM0QsMENBQTBDO0FBQzFDLDBDQUF5QztBQU96QyxJQUFhLGdCQUFnQjtJQUV6QiwwQkFBb0IsTUFBYztRQUFsQyxpQkFNQztRQU5tQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDOUIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDN0MsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2RyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsc0NBQVcsR0FBWCxVQUFZLEtBQVMsRUFBRSxNQUFVO1FBQzdCLElBQUksSUFBSSxHQUFPLEVBQUUsQ0FBQztRQUNsQixFQUFFLENBQUEsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFFRCxFQUFFLENBQUEsQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsSUFBSSxPQUFULElBQUksRUFBVSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7UUFDckUsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ1AsdUJBQUM7QUFBRCxDQXJCQSxBQXFCQyxJQUFBO0FBckJZLGdCQUFnQjtJQUw1QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLGlEQUFpRDtLQUNqRSxDQUFDO3FDQUk4QixlQUFNO0dBRnpCLGdCQUFnQixDQXFCNUI7QUFyQlksNENBQWdCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTW9pei5LYWNod2FsYSBvbiAwMi0wNi0yMDE2LlxuICovXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7SGVyb1NlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9oZXJvLnNlcnZpY2VcIjtcbi8vIGltcG9ydCB7SGVyb30gZnJvbSBcIi4uLy4uL21vZGVscy9oZXJvXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIFNpZGViYXJDb21wb25lbnQge1xuICAgIHByaXZhdGUgcGFnZV9uYW1lOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyBcbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY29uc3RydWN0b3IubmFtZSA9PT0gXCJOYXZpZ2F0aW9uRW5kXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VfbmFtZSA9IHRoaXMuZ2V0UGFnZU5hbWUodGhpcy5yb3V0ZXIucm91dGVyU3RhdGUsIHRoaXMucm91dGVyLnJvdXRlclN0YXRlLnJvb3QpLmpvaW4oJy0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0UGFnZU5hbWUoc3RhdGU6YW55LCBwYXJlbnQ6YW55KSB7XG4gICAgICAgIHZhciBkYXRhOmFueSA9IFtdO1xuICAgICAgICBpZihwYXJlbnQgJiYgcGFyZW50LnNuYXBzaG90LmRhdGEgJiYgcGFyZW50LnNuYXBzaG90LmRhdGEucGFnZV9uYW1lKSB7XG4gICAgICAgICAgICBkYXRhLnB1c2gocGFyZW50LnNuYXBzaG90LmRhdGEucGFnZV9uYW1lKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpZihzdGF0ZSAmJiBwYXJlbnQpIHtcbiAgICAgICAgICAgIGRhdGEucHVzaCguLi4gdGhpcy5nZXRQYWdlTmFtZShzdGF0ZSwgc3RhdGUuZmlyc3RDaGlsZChwYXJlbnQpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG59XG4iXX0=
