import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { User } from "./user.model";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent {
    myForm: FormGroup;
    error = false
    errorMessage: string
    message = ''
    constructor(private authService: AuthService, private router: Router) {}

    onSubmit() {
        this.message = 'Logging in (operation in progress)';
        const user = new User(this.myForm.value.username, this.myForm.value.password);
        setTimeout(() => {
            this.authService.signin(user)
            .subscribe(
                data => {
                    this.message = '';
                    if(data.token){
                        localStorage.setItem('token', data.token);
                        this.router.navigateByUrl('/auth/home');
                    } else {
                        this.error = true
                        this.errorMessage = data.errorMessage;
                    }
                },
                error => console.error(error)
            );
        }, 2000)
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            username: new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[a-zA-Z0-9 ]+$/)
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
}