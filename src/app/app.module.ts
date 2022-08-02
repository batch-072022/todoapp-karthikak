import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { HomeComponent } from './home/home.component';
import { ListtaskComponent } from './listtask/listtask.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { LoginUsersComponent } from './login-users/login-users.component';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    EdittaskComponent,
    HomeComponent,
    ListtaskComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ViewUserComponent,
    LoginUsersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
