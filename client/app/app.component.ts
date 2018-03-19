import {Component} from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
    selector:'my-app',
    templateUrl: './app/app.html'
})

export class AppComponent {
    title = 'MEAN App';
    constructor(
        private userService: UserService) { }
}