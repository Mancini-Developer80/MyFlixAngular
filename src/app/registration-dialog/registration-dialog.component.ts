import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.css'],
})
export class RegistrationDialogComponent {
  registrationForm: FormGroup;

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

  onCancel(): void {
    this.dialogRef.close();
  }
}
