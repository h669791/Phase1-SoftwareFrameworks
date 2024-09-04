import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
createChannel() {
throw new Error('Method not implemented.');
}
  user: any;

  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  // Function to check if user has a specific role
  isRole(role: string): boolean {
    return this.user.roles && this.user.roles.includes(role);
  }

  // Example: Promote user to a new role
  promoteUser(userId: string, role: string) {
    this.http.post('/promote', { userId, role }).subscribe(response => {
      console.log(response);
    });
  }

  // Example: Create a new group (only for Group Admins)
  createGroup() {
    this.http.post('/createGroup', { userId: this.user.id, groupName: 'New Group' }).subscribe(response => {
      console.log(response);
    });
  }

  // Example: Join a group (only for Chat Users)
  joinGroup() {
    this.http.post('/joinChannel', { userId: this.user.id, channelId: 'some-channel-id' }).subscribe(response => {
      console.log(response);
    });
  }
}
