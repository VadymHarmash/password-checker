import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordComponent } from './password/password.component';
import { PasswordModule } from './password/password.module';

@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
