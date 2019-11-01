// modules
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import * as firebase from "firebase/app";

// components

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

//firebase.initializeApp(environment.firebase);
//firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

// NG MODULE
@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "",
        loadChildren: "./render/render.module#RenderModule"
      },
      {
        path: "admin",
        loadChildren: "./admin/admin.module#AdminModule"
      }
    ]),
    //AngularFireModule.initializeApp(environment.firebase, "coreDB"),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "it-IT" },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: []
})
export class AppModule {}
