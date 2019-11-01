import { Component } from "@angular/core";
import { AuthService } from "./admin/providers/auth.service";
import { Router, NavigationEnd } from "@angular/router";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(public authAdminService: AuthService, private router: Router) {
    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
