// modules
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RoutingModule } from "./routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import * as papaparse from "papaparse";
import * as firebase from "firebase/app";
import { ScrollingModule } from "@angular/cdk/scrolling";

// components
import { AppComponent } from "./app.component";

// LCOALE
import {
  registerLocaleData,
  LocationStrategy,
  HashLocationStrategy
} from "@angular/common";
import localeIT from "@angular/common/locales/it";
import { LOCALE_ID } from "@angular/core";
registerLocaleData(localeIT, "it");

// FIREBASE
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

// ENVIRONMENT
import { environment } from "../environments/environment";
import { SafeUrlPipe } from "./admin/providers/safe-url.pipe";
import { AuthService } from "./admin/providers/auth.service";
import { FirebaseService } from "./firebase.service";
import { SharedModule } from "./shared/shared.module";
import { CouponService } from "./render/providers/coupon.service";

firebase.initializeApp(environment.firebase);
//firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

// NG MODULE
@NgModule({
  declarations: [AppComponent, SafeUrlPipe],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RoutingModule,
    AngularFireModule.initializeApp(environment.firebase, "coreDB"),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    ScrollingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "it-IT" },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AuthService,
    FirebaseService,
    CouponService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
