import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-home',
    template: `
    <div class="col-md-8 col-md-offset-2">
    Hiiii {{username}}
    <br><br>
    <h4>This Page is only accessed by logged in users!</h4>
</div>
    `
})
export class HomeComponent implements OnInit {
    constructor(private authService: AuthService) {}

    public username: String;

    ngOnInit() {
        this.authService.getDetails()
            .subscribe(
                data => {
                    this.username = data.user.username;
                }
            )
    }
}