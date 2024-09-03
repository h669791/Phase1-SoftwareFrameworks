import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-group-management',
  templateUrl: './group-management.component.html',
  styleUrls: ['./group-management.component.css']
})
export class GroupManagementComponent implements OnInit {
  groups: any[] = [];
  groupName: string = '';

  constructor(private groupService: GroupService) {}

  ngOnInit() {
    this.groups = this.groupService.getAllGroups();
  }

  createGroup() {
    this.groupService.createGroup(this.groupName);
    this.groupName = '';
    this.groups = this.groupService.getAllGroups();
  }

  deleteGroup(id: number) {
    this.groupService.deleteGroup(id);
    this.groups = this.groupService.getAllGroups();
  }
}
