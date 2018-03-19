import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";
import { Router } from '@angular/router';
import {UserService} from "../../services/user.service";
import { Headers, Http, Response } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
// import { CookieService } from 'ngx-cookie-service';
import {CookieService} from 'angular2-cookie/core';

@Component({
    selector: 'app-login',
    templateUrl: './app/components/login/login.component.html'
})

export class LoginComponent implements OnInit {

    error: any;
    bool: boolean = false;
    // user: User;
    // @Input() user: User;
    
    user: any = {};
    constructor(private router: Router,private userService: UserService, private http: Http, private cookieService:CookieService) { 
        // this.user.v_name = '';
        // this.user.v_pwd = '';
    }

    ngOnInit() {
        // this.getHeroes();
        this.bool = false;
    }

    login() {
        console.log(this.user);
        
        this.http.post('login', this.user).map(response => response.json()).subscribe(data =>{

            console.log(data);
            if (data.status == 'success') {
                this.cookieService.put('role',data.user.role);
                this.router.navigate(['/admin/user']);
            }else{
                this.bool = true;
                console.log(this.bool);
            }
        });
        
        // this.userService
        //     .login(this.user)
        //     .then(result => { 
        //         console.log(result);
        //         this.router.navigate(['/user']);
        //     })
        //     .catch(error => this.error = error);
    }

}
