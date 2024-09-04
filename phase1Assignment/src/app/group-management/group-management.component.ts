import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-group-management',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './group-management.component.html',
  styleUrls: ['./group-management.component.css']
})
export class GroupManagementComponent {
  groupName = '';
  groups: string[] = [];
  currentUser: any;

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user') || '{}');
    this.groups = this.currentUser.groups || [];
  }

  createGroup() {
    if (!this.groups.includes(this.groupName)) {
      this.groups.push(this.groupName);
      this.currentUser.groups = this.groups;
      this.updateUserData();
      alert('Group created');
    } else {
      alert('Group already exists');
    }
  }

  deleteGroup(group: string) {
    this.groups = this.groups.filter(g => g !== group);
    this.currentUser.groups = this.groups;
    this.updateUserData();
    alert('Group deleted');
  }

  updateUserData() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex((u: any) => u.username === this.currentUser.username);
    users[userIndex] = this.currentUser;
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('user', JSON.stringify(this.currentUser));
  }
}
