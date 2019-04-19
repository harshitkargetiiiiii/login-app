import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { User } from "./user.model";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthService implements CanActivate {
    constructor(private http: Http, private router: Router) {}

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/users/signin', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getDetails() {
        const headers = new Headers({'x-auth-token': localStorage.getItem('token')});
        return this.http.get('http://localhost:3000/users/profile', {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    logout() {
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }

    canActivate(): boolean{
        const isAuth = this.isLoggedIn();
        if(!isAuth){
        //if not authenticated do something. e.g redirect to login  page
            this.router.navigateByUrl('/auth/signin')
        }
        return isAuth;
    }
}