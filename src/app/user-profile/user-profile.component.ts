import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * Component for displaying and managing user profile information.
 * Allows users to view and update their details and favorite movies.
 */
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
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
export class UserProfileComponent implements OnInit {
  /**
   * Stores user data including username, email, and birthday.
   */
  userData: any = { username: '', email: '', birthday: '' };

  /**
   * Stores the user's favorite movies.
   */
  favoriteMovies: any[] = [];

  /**
   * Creates an instance of UserProfileComponent.
   *
   * @param fetchApiData - Service for fetching and updating user data.
   * @param snackBar - MatSnackBar instance for displaying notifications.
   */
  constructor(
    private fetchApiData: FetchApiDataService,
    private snackBar: MatSnackBar
  ) {}

  /**
   * Lifecycle hook that executes when the component initializes.
   * Fetches user profile data.
   */
  ngOnInit(): void {
    this.getUserProfile();
  }

  /**
   * Fetches user profile data from the API.
   * Retrieves user information and triggers fetching favorite movies.
   */
  getUserProfile(): void {
    const userId = localStorage.getItem('userId') || '';
    this.fetchApiData.getUser(userId).subscribe(
      (response) => {
        this.userData = response;
        this.getFavoriteMovies();
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  /**
   * Fetches the user's favorite movies from the API.
   */
  getFavoriteMovies(): void {
    const userId = localStorage.getItem('userId') || '';
    this.fetchApiData.getFavoriteMovies(userId).subscribe(
      (response) => {
        this.favoriteMovies = response;
      },
      (error) => {
        console.error('Error fetching favorite movies:', error);
      }
    );
  }

  /**
   * Updates user profile information.
   * Sends updated data to the API and displays a success or error message.
   */
  updateUserProfile(): void {
    const userId = localStorage.getItem('userId') || '';
    this.fetchApiData.editUser(userId, this.userData).subscribe(
      () => {
        this.snackBar.open('Profile updated successfully!', 'OK', {
          duration: 2000,
        });
      },
      () => {
        this.snackBar.open('Failed to update profile.', 'OK', {
          duration: 2000,
        });
      }
    );
  }
}
