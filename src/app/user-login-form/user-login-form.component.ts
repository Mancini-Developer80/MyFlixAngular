import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

/**
 * Component for handling user login functionality.
 * Displays a form where users enter their credentials to authenticate.
 */
@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
  ],
})
export class UserLoginFormComponent implements OnInit {
  /**
   * Holds the login credentials entered by the user.
   */
  @Input() loginData = { username: '', password: '' };

  /**
   * Creates an instance of UserLoginFormComponent.
   *
   * @param fetchApiData - Service to handle API requests related to user authentication.
   * @param dialogRef - Reference to the opened dialog, enabling programmatic control.
   * @param snackBar - MatSnackBar instance for displaying login status notifications.
   * @param router - Router instance to navigate upon successful login.
   */
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router
  ) {}

  /**
   * Lifecycle hook that runs when the component is initialized.
   */
  ngOnInit(): void {}

  /**
   * Sends login data to the API, verifies credentials, and handles user authentication.
   * On success, closes the dialog, stores user details, and navigates to the movies page.
   * On failure, displays an error message.
   */
  loginUser(): void {
    this.fetchApiData.loginUser(this.loginData).subscribe(
      (response) => {
        this.dialogRef.close();
        this.snackBar.open('Login successful!', 'OK', { duration: 2000 });
        // Store the whole user object (optional)
        localStorage.setItem('user', JSON.stringify(response.user));
        // Store the user ID for API calls
        localStorage.setItem('userId', response.user._id);
        localStorage.setItem('token', response.token);
        this.router.navigate(['movies']);
      },
      (error) => {
        this.snackBar.open(
          'Login failed. Please check your credentials.',
          'OK',
          { duration: 2000 }
        );
      }
    );
  }
}
