import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchApiDataService {
  private apiUrl = 'https://murmuring-brook-46457-0204485674b0.herokuapp.com';

  constructor(private http: HttpClient) {}

  // Registration
  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, userData);
  }

  // Login
  loginUser(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // All movies
  getAllMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movies`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    });
  }

  // One movie by title
  getMovie(movieTitle: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/movies/${encodeURIComponent(movieTitle)}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }),
      }
    );
  }

  // Director details
  getDirector(directorName: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/directors/${encodeURIComponent(directorName)}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }),
      }
    );
  }

  // Genre details
  getGenre(genreName: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/genres/${encodeURIComponent(genreName)}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }),
      }
    );
  }

  // Get user details by userId (MongoDB _id)
  getUser(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${userId}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    });
  }

  // Get favorite movies for a user by userId
  getFavoriteMovies(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${userId}/favoriteMovies`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    });
  }

  // Add a movie to favorite movies (expects userId and movieTitle)
  addFavoriteMovie(userId: string, movieTitle: string): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/users/${userId}/movies/${encodeURIComponent(movieTitle)}`,
      {},
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }),
      }
    );
  }

  // Edit user details by userId
  editUser(userId: string, userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/${userId}`, userData, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    });
  }

  // Delete user by userId
  deleteUser(userId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${userId}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    });
  }

  // Delete a movie from the favorite movies by userId and movieTitle
  deleteFavoriteMovie(userId: string, movieTitle: string): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}/users/${userId}/movies/${encodeURIComponent(movieTitle)}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }),
      }
    );
  }
}
