import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { GenreDialogComponent } from '../genre-dialog/genre-dialog.component';
import { DirectorDialogComponent } from '../director-dialog/director-dialog.component';
import { MovieDetailsDialogComponent } from '../movie-details-dialog/movie-details-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * Component that displays a list of movies in card format.
 * Users can view details, genres, directors, and add movies to favorites.
 */
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDialogModule, MatIconModule],
})
export class MovieCardComponent implements OnInit {
  /**
   * Array to store fetched movie data.
   */
  movies: any[] = [];

  /**
   * Creates an instance of MovieCardComponent.
   *
   * @param fetchApiData - Service for fetching movie data from the API.
   * @param dialog - MatDialog instance for opening dialogs.
   * @param snackBar - MatSnackBar instance for displaying notifications.
   */
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  /**
   * Lifecycle hook that runs when the component is initialized.
   * Fetches movie data.
   */
  ngOnInit(): void {
    this.getMovies();
  }

  /**
   * Fetches the list of movies from the API.
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
    });
  }

  /**
   * Opens a dialog displaying genre details.
   *
   * @param genre - The genre data to be displayed.
   */
  openGenreDialog(genre: any): void {
    this.dialog.open(GenreDialogComponent, {
      data: genre,
      width: '400px',
    });
  }

  /**
   * Opens a dialog displaying director details.
   *
   * @param director - The director data to be displayed.
   */
  openDirectorDialog(director: any): void {
    this.dialog.open(DirectorDialogComponent, {
      data: director,
      width: '400px',
    });
  }

  /**
   * Opens a dialog displaying movie details.
   *
   * @param movie - The movie data to be displayed.
   */
  openMovieDetailsDialog(movie: any): void {
    this.dialog.open(MovieDetailsDialogComponent, {
      data: movie,
      width: '400px',
    });
  }

  /**
   * Adds a movie to the user's favorite list.
   *
   * @param movieId - The ID of the movie to be added to favorites.
   */
  // In your movie-card.component.ts (or similar)
  addToFavorites(movie: any): void {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      this.snackBar.open('User not logged in.', 'OK', { duration: 2000 });
      return;
    }
    if (!movie || !movie.Title) {
      this.snackBar.open('Movie data is missing.', 'OK', { duration: 2000 });
      return;
    }
    // Prevent duplicate favorites: check if already in favorites
    if (movie.isFavorite) {
      this.snackBar.open('Movie already in favorites!', 'OK', {
        duration: 2000,
      });
      return;
    }
    this.fetchApiData.addFavoriteMovie(userId, movie.Title).subscribe(
      () => {
        this.snackBar.open('Movie added to favorites!', 'OK', {
          duration: 2000,
        });
        movie.isFavorite = true; // Optionally update UI state
      },
      (error) => {
        if (error.status === 400) {
          this.snackBar.open('Movie already in favorites!', 'OK', {
            duration: 2000,
          });
        } else {
          this.snackBar.open('Failed to add movie to favorites.', 'OK', {
            duration: 2000,
          });
        }
      }
    );
  }
}
