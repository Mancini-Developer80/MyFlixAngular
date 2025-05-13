import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

/**
 * Root component of the application.
 * Manages global functionality like navigation and authentication status.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterModule, // Enables routing within the application
    MatToolbarModule, // Provides toolbar functionality for navigation
    MatDialogModule, // Enables modal dialogs for user interactions
    CommonModule, // Provides common Angular utilities
  ],
})
export class AppComponent {
  /**
   * Title of the application.
   */
  title = 'myFlix-Angular-client';

  /**
   * Creates an instance of AppComponent.
   *
   * @param dialog - MatDialog instance for opening modals.
   * @param router - Router instance for navigation control.
   */
  constructor(public dialog: MatDialog, private router: Router) {}

  /**
   * Checks if the user is logged in.
   *
   * @returns `true` if the user has a valid token, otherwise `false`.
   */
  isUserLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  /**
   * Determines whether to display the movies link.
   * The link is shown only if the user is logged in and not already on the movies page.
   *
   * @returns `true` if the link should be displayed, otherwise `false`.
   */
  showMoviesLink(): boolean {
    return this.isUserLoggedIn() && this.router.url !== '/movies';
  }

  /**
   * Logs the user out by removing authentication data and redirecting to the welcome page.
   */
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username'); // Optionally remove the username
    this.router.navigate(['/welcome']);
  }
}
