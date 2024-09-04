import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';  // Your backend URL

  constructor(private http: HttpClient) {}

  // Function to handle login
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  // Store the token in localStorage when login is successful
  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Check if the user is logged in by verifying if token exists
  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');  // Check if authToken exists in localStorage
  }

  // Logout function to clear localStorage
  logout(): void {
    localStorage.removeItem('authToken');  // Remove the token to log out the user
  }
}
