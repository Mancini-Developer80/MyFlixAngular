import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

/**
 * Component for handling user registration.
 * Displays a form for users to input their details and submit a registration request.
 */
@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
})
export class UserRegistrationFormComponent implements OnInit {
  /**
   * Object storing user registration details, including username, password, email, and birthday.
   */
  @Input() userData = { username: '', password: '', email: '', birthday: '' };

  /**
   * Creates an instance of UserRegistrationFormComponent.
   *
   * @param fetchApiData - Service for handling API requests related to user registration.
   * @param dialogRef - Reference to the dialog instance, allowing programmatic closing.
   * @param snackBar - MatSnackBar instance for displaying success or error messages.
   */
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) {}

  /**
   * Lifecycle hook that runs when the component initializes.
   */
  ngOnInit(): void {}

  /**
   * Submits the user registration data to the API.
   * On success, closes the dialog and displays a success message.
   * On failure, displays an error message.
   */
  registerUser(): void {
    this.fetchApiData.registerUser(this.userData).subscribe(
      () => {
        this.dialogRef.close();
        this.snackBar.open('User registered successfully!', 'OK', {
          duration: 2000,
        });
      },
      () => {
        this.snackBar.open('Registration failed. Please try again.', 'OK', {
          duration: 2000,
        });
      }
    );
  }
}
