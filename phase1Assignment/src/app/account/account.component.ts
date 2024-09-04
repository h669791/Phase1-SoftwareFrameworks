import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  username = '';
  email = '';
  currentUser: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user') || '{}');
  }

  createUser() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Ensure the username is unique
    if (users.find((u: any) => u.username === this.username)) {
      alert('Username already exists!');
      return;
    }

    const newUser = {
      id: users.length + 1,
      username: this.username,
      email: this.email,
      roles: ['User'],  // Default role
      groups: []        // Groups will be empty initially
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('user', JSON.stringify(newUser));  // Set logged in user

    alert('User created successfully');
    this.router.navigate(['/dashboard']);
  }

  deleteAccount() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.filter((u: any) => u.username !== this.currentUser.username);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.removeItem('user');
    alert('Account deleted');
    this.router.navigate(['/login']);
  }
}
