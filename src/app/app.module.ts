import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { LoginComponent } from './view/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    PasswordModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
