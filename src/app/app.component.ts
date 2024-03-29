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
    const firebaseConfig = {
      apiKey: "AIzaSyDAR-6irEfXLSr9oRenmMXWnTQHrIc9mas",
      authDomain: "lacasadelciclista-4faf8.firebaseapp.com",
      databaseURL: "https://lacasadelciclista-4faf8.firebaseio.com",
      projectId: "lacasadelciclista-4faf8",
      storageBucket: "lacasadelciclista-4faf8.appspot.com",
      messagingSenderId: "452913255051"
    };
    firebase.initializeApp(firebaseConfig);

    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
