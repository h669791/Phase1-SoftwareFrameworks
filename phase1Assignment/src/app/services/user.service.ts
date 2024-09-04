import { Injectable } from '@angular/core';
import { User } from '../models/user.model';  // Import the User model
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Example data store for users
  private users: User[] = [];

  // Observable to track the current user
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor() {}

  // Method to create a new user
  createUser(user: User) {
    this.users.push(user);
  }

  // Method to get the list of users
  getUsers(): User[] {
    return this.users;
  }

  // Method to set the current user
  setCurrentUser(user: User) {
    this.currentUserSubject.next(user);
  }

  // Method to get the current user
  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
