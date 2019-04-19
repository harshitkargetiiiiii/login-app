import { Routes, RouterModule } from "@angular/router";

import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";
import { HomeComponent } from "./auth/home.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES },
    { path: 'welcome', component: WelcomeComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);