import { Component } from "@angular/core";
import { AuthService } from "../auth/auth.service";
export class WelcomeComponent {
    constructor(authService) {
        this.authService = authService;
        this.message = 'You are now logged in';
        this.info = 'Click on logout button to logout.'
    }
    ngOnInit() {
        this.isLogged = this.authService.isLoggedIn();
        if (!this.isLogged) {
            this.message = 'You are not logged in';
            this.info = 'Click on login page to enter your credentials.'
        }
    }
}
WelcomeComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-authentication',
                template: `
        <header class="row spacing">
            <h1>Welcome To Our Website.</h1>
            <h2>{{info}}</h2>
            <h5>{{message}}</h5>
        </header>
    `
            },] },
];
/** @nocollapse */
WelcomeComponent.ctorParameters = () => [
    { type: AuthService, },
];
