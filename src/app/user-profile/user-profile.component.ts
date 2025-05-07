import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  userData = { username: '', email: '', birthday: '' };

  constructor(
    private fetchApiData: FetchApiDataService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile(): void {
    const username = localStorage.getItem('username') || '';
    this.fetchApiData.getUser(username).subscribe((response) => {
      this.userData = response;
    });
  }

  updateUserProfile(): void {
    const username = localStorage.getItem('username') || '';
    this.fetchApiData.editUser(username, this.userData).subscribe(
      (response) => {
        this.snackBar.open('Profile updated successfully!', 'OK', {
          duration: 2000,
        });
      },
      (error) => {
        this.snackBar.open('Failed to update profile.', 'OK', {
          duration: 2000,
        });
      }
    );
  }
}
