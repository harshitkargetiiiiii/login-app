import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'app-authentication',
    template: `
        <header class="row spacing">
            <h1>Welcome To Our Website.</h1>
            <h5>{{message}}</h5>
        </header>
    `
})
export class WelcomeComponent implements OnInit {
    constructor(private authService: AuthService){}
    message = 'You are now logged in';
    isLogged: Boolean
    ngOnInit(){
        this.isLogged = this.authService.isLoggedIn();
        if(!this.isLogged){
            this.message = 'You are not logged in';
        }
    }

}