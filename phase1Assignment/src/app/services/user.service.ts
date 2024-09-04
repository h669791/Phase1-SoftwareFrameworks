import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = [
    { username: 'admin', password: 'password', roles: ['Super Admin'] },
    { username: 'user', password: 'userpass', roles: ['User'] }
  ];

  getUsers() {
    return this.users;
  }

  // Other user-related methods like createUser, deleteUser can be added
}
