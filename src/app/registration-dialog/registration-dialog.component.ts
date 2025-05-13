import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FetchApiDataService } from '../fetch-api-data.service';

/**
 * Component for handling user registration in a dialog form.
 * Allows users to enter their details and submit the registration request.
 */
@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.css'],
})
export class RegistrationDialogComponent {
  /**
   * Form group for user registration data.
   */
  registrationForm: FormGroup;

  /**
   * Creates an instance of RegistrationDialogComponent.
   *
   * @param dialogRef - Reference to the opened dialog, allowing programmatic control.
   * @param fb - FormBuilder instance for managing form creation and validation.
   * @param fetchApiData - Service for handling API requests related to user registration.
   */
  constructor(
    private dialogRef: MatDialogRef<RegistrationDialogComponent>,
    private fb: FormBuilder,
    private fetchApiData: FetchApiDataService
  ) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      birthday: [''],
    });
  }

  /**
   * Handles form submission for user registration.
   * Sends registration data to the API and closes the dialog upon success.
   */
  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.fetchApiData.registerUser(this.registrationForm.value).subscribe(
        (response) => {
          console.log('User registered successfully:', response);
          this.dialogRef.close();
        },
        (error) => {
          console.error('Error registering user:', error);
        }
      );
    }
  }

  /**
   * Closes the registration dialog without submitting data.
   */
  onCancel(): void {
    this.dialogRef.close();
  }
}
