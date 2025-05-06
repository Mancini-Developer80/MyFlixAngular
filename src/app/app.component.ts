import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import { MatCardContent } from '@angular/material/card'; // Import MatCardContent
import { MatCardTitle } from '@angular/material/card'; // Import MatCardTitle

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCard,
    MatCardContent,
    CommonModule,

    MatButtonModule,
    MatCardModule,
  ],
})
export class AppComponent {
  title = 'myFlix-Angular-client';

  constructor(public dialog: MatDialog) {}

  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '280px',
    });
  }

  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      width: '280px',
    });
  }
}
