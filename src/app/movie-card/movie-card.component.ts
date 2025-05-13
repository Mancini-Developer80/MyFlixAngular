import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; // Import MatDialog
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { GenreDialogComponent } from '../genre-dialog/genre-dialog.component';
import { DirectorDialogComponent } from '../director-dialog/director-dialog.component'; // Import DirectorDialogComponent
import { MovieDetailsDialogComponent } from '../movie-details-dialog/movie-details-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MovieDetailsDialogComponent

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDialogModule, MatIconModule],
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog, // Inject MatDialog
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  openGenreDialog(genre: any): void {
    this.dialog.open(GenreDialogComponent, {
      data: genre,
      width: '400px',
    });
  }

  openDirectorDialog(director: any): void {
    this.dialog.open(DirectorDialogComponent, {
      data: director,
      width: '400px',
    });
  }

  openMovieDetailsDialog(movie: any): void {
    this.dialog.open(MovieDetailsDialogComponent, {
      data: movie,
      width: '400px',
    });
  }
  addToFavorites(movieId: string): void {
    const username = localStorage.getItem('username') || '';
    this.fetchApiData.addFavoriteMovie(username, movieId).subscribe(
      (response) => {
        this.snackBar.open('Movie added to favorites!', 'OK', {
          duration: 2000,
        });
      },
      (error) => {
        console.error('Error adding movie to favorites:', error);
        this.snackBar.open('Failed to add movie to favorites.', 'OK', {
          duration: 2000,
        });
      }
    );
  }
}
