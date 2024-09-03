import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private groups = [
    { id: 1, name: 'Group 1' },
    { id: 2, name: 'Group 2' }
  ];

  getAllGroups() {
    return this.groups;
  }
}