/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Injectable} from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {User} from "../models/user";
import { Router } from '@angular/router';

@Injectable()
export class UserService {

    private useresUrl = 'api/user';

    constructor(private http: Http,private router: Router) { }

    getUseres(): Promise<User[]> {
        return this.http.get(this.useresUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getUser(id: string) {
        return this.http.get(this.useresUrl + '/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    save(user: User): Promise<User>  {
        if (user._id) {
            return this.put(user);
        }
        return this.post(user);
    }

    private post(user: User): Promise<User> {
        let headers = new Headers({'Content-Type': 'application/json'});

        return this.http
            .post(this.useresUrl, JSON.stringify(user), {headers:headers})
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private put(user: User) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.useresUrl}/${user._id}`;

        return this.http
            .put(url, JSON.stringify(user), {headers: headers})
            .toPromise()
            .then(() => user)
            .catch(this.handleError);
    }

    delete(user: User) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.useresUrl}/${user._id}`;

        return this.http
            .delete(url, {headers: headers})
            .toPromise()
            .catch(this.handleError);
    }

    login(user: User) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `login`;

        return this.http
            .post(url, JSON.stringify(user), {headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    logout() {
        let url = `logout`;
        this.http.get(url).map(response => response.json()).subscribe(data => {
            if (data.status == true) {
                this.router.navigate(['/']);
            } else {
                 
            }
        });
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}