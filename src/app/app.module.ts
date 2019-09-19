import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule } from '@angular/forms';
var config = {
  apiKey: "AIzaSyD6RbV1qXP9CBwalR4vDhoJ6_FVQapF81Y",
  authDomain: "cases-a01f9.firebaseapp.com",
  databaseURL: "https://cases-a01f9.firebaseio.com",
  projectId: "cases-a01f9",
  storageBucket: "cases-a01f9.appspot.com",
  messagingSenderId: "627332534503",
  appId: "1:627332534503:web:d0aaf1f9c01241d5"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    RouterModule.forRoot([]),
    AngularFireAuthModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
