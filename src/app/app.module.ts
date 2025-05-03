import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';

@NgModule({
  declarations: [UserRegistrationFormComponent, UserLoginFormComponent], // Remove AppComponent
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [], // No bootstrap needed for standalone components
})
export class AppModule {}
