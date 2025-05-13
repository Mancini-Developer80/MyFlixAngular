import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router'; // Import RouterModule and Router
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterModule, // Ensure RouterModule is included
    MatToolbarModule,
    MatDialogModule,
    CommonModule,
  ],
})
export class AppComponent {
  title = 'myFlix-Angular-client';

  constructor(public dialog: MatDialog, private router: Router) {} // Inject Router

  isUserLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  showMoviesLink(): boolean {
    return this.isUserLoggedIn() && this.router.url !== '/movies';
  }

  logout(): void {
    localStorage.removeItem('token'); // Remove the token
    localStorage.removeItem('username'); // Optionally remove the username
    this.router.navigate(['/welcome']); // Navigate to the welcome page
  }
}
