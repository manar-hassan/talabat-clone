import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginFormComponent } from './Component/login-form/login-form.component';
import { RegistrationFormComponent } from './Component/registration-form/registration-form.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { BoardAdminComponent } from './Component/board-admin/board-admin.component';
import { BoardUserComponent } from './Component/board-user/board-user.component';
import { HomeComponent } from './Component/home/home.component';
import { AddRestoComponent } from './Component/add-resto/add-resto.component';
import { UpdateRestoComponent } from './Component/update-resto/update-resto.component';
import { AllRestoComponent } from './Component/all-resto/all-resto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    HomeComponent,
    AddRestoComponent,
    UpdateRestoComponent,
    AllRestoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
