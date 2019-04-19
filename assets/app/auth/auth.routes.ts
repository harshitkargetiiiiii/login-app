import { Routes } from "@angular/router";

import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";
import { HomeComponent } from "./home.component";
import { AuthService } from './auth.service'

export const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', canActivate: [ AuthService ], component: LogoutComponent },
    { path: 'home', canActivate: [ AuthService ] , component: HomeComponent }
];