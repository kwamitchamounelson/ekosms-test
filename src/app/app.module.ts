import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AngularFireModule } from '@angular/fire';

const firebaseConfig = {
  apiKey: "AIzaSyATRR_U0NK8SHEFF3FyfMJZ_O2B_2ggUAI",
  authDomain: "searchwordmovies.firebaseapp.com",
  databaseURL: "https://searchwordmovies.firebaseio.com",
  projectId: "searchwordmovies",
  storageBucket: "searchwordmovies.appspot.com",
  messagingSenderId: "445853026629",
  appId: "1:445853026629:web:e83fc7177626f6e056162c"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
