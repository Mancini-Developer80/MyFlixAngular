import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchApiDataService {
  private apiUrl = 'https://murmuring-brook-46457-0204485674b0.herokuapp.com';

  constructor(private http: HttpClient) {}

  // User registration
  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, userData);
  }

  // User login
  loginUser(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // Get all movies
  getAllMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movies`);
  }

  // Get one movie
  getMovie(movieId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/movies/${movieId}`);
  }

  // Get director
  getDirector(directorName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/directors/${directorName}`);
  }

  // Get genre
  getGenre(genreName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/genres/${genreName}`);
  }

  // Get user
  getUser(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${username}`);
  }

  // Get favorite movies for a user
  getFavoriteMovies(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${username}/movies`);
  }

  // Add a movie to favorite movies
  addFavoriteMovie(username: string, movieId: string): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/users/${username}/movies/${movieId}`,
      {}
    );
  }

  // Edit user
  editUser(username: string, userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/${username}`, userData);
  }

  // Delete user
  deleteUser(username: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${username}`);
  }

  // Delete a movie from the favorite movies
  deleteFavoriteMovie(username: string, movieId: string): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}/users/${username}/movies/${movieId}`
    );
  }
}
