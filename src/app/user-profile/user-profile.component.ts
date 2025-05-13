import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  userData: any = { username: '', email: '', birthday: '' }; // User data object
  favoriteMovies: any[] = []; // Array to store favorite movies

  constructor(
    private fetchApiData: FetchApiDataService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getUserProfile(); // Fetch user profile on component initialization
  }

  // Fetch user profile data
  getUserProfile(): void {
    const username = localStorage.getItem('username') || '';
    this.fetchApiData.getUser(username).subscribe(
      (response) => {
        this.userData = response; // Populate user data
        this.getFavoriteMovies(); // Fetch favorite movies after user data
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  // Fetch favorite movies
  getFavoriteMovies(): void {
    const username = localStorage.getItem('username') || '';
    this.fetchApiData.getFavoriteMovies(username).subscribe(
      (response) => {
        this.favoriteMovies = response; // Populate favorite movies array
      },
      (error) => {
        console.error('Error fetching favorite movies:', error);
      }
    );
  }

  // Update user profile
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
