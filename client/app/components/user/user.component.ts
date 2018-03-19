/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import { Router } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';
import { CookieService } from 'angular2-cookie/core';

@Component({
    selector: 'app-user',
    templateUrl: './app/components/user/user.component.html'
})

export class UserComponent {
    
    useres: User[];
    error: any;
    selectedUser: User;

    constructor(
        private router: Router,
        private userService: UserService,
        private cookie: CookieService) { }
    getUseres() {
        this.userService.getUseres().then(useres => this.useres = useres);
    }
    ngOnInit() {
        this.getUseres();
    }

    gotoEdit(id:any) {
        this.router.navigate(['/admin/user/edit', id]);
    }

    addUser() {
        // this.selectedUser = null;
        this.router.navigate(['/admin/user', 'add']);
    }

    deleteUser(user: User, event: any) {
        event.stopPropagation();
        this.userService
            .delete(user)
            .then(res => {
                this.useres = this.useres.filter(h => h !== user);
                if (this.selectedUser === user) { this.selectedUser = null; }
            })
            .catch(error => this.error = error);
    }
}
