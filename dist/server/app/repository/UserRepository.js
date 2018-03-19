"use strict";
/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserSchema = require("./../dataAccess/schemas/UserSchema");
var RepositoryBase = require("./BaseRepository");
var UserRepository = (function (_super) {
    __extends(UserRepository, _super);
    function UserRepository() {
        return _super.call(this, UserSchema) || this;
    }
    return UserRepository;
}(RepositoryBase));
Object.seal(UserRepository);
module.exports = UserRepository;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvc2l0b3J5L1VzZXJSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7QUFJSCwrREFBa0U7QUFDbEUsaURBQW9EO0FBRXBEO0lBQThCLGtDQUEwQjtJQUNwRDtlQUNJLGtCQUFNLFVBQVUsQ0FBQztJQUNyQixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUpBLEFBSUMsQ0FKNkIsY0FBYyxHQUkzQztBQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDNUIsaUJBQVMsY0FBYyxDQUFDIiwiZmlsZSI6ImFwcC9yZXBvc2l0b3J5L1VzZXJSZXBvc2l0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IE1vaXouS2FjaHdhbGEgb24gMTUtMDYtMjAxNi5cbiAqL1xuXG5pbXBvcnQgVXNlck1vZGVsID0gcmVxdWlyZShcIi4vLi4vbW9kZWwvVXNlck1vZGVsXCIpO1xuaW1wb3J0IElVc2VyTW9kZWwgPSByZXF1aXJlKFwiLi8uLi9tb2RlbC9pbnRlcmZhY2VzL1VzZXJNb2RlbFwiKTtcbmltcG9ydCBVc2VyU2NoZW1hID0gcmVxdWlyZShcIi4vLi4vZGF0YUFjY2Vzcy9zY2hlbWFzL1VzZXJTY2hlbWFcIik7XG5pbXBvcnQgUmVwb3NpdG9yeUJhc2UgPSByZXF1aXJlKFwiLi9CYXNlUmVwb3NpdG9yeVwiKTtcblxuY2xhc3MgVXNlclJlcG9zaXRvcnkgIGV4dGVuZHMgUmVwb3NpdG9yeUJhc2U8SVVzZXJNb2RlbD4ge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoVXNlclNjaGVtYSk7XG4gICAgfVxufVxuXG5PYmplY3Quc2VhbChVc2VyUmVwb3NpdG9yeSk7XG5leHBvcnQgPSBVc2VyUmVwb3NpdG9yeTsiXX0=
