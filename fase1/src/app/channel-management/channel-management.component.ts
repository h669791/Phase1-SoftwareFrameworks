import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';
import { ChannelService } from '../services/channel.service';

@Component({
  selector: 'app-channel-management',
  templateUrl: './channel-management.component.html',
  styleUrls: ['./channel-management.component.css']
})
export class ChannelManagementComponent implements OnInit {
  groups: any[] = [];
  channels: any[] = [];
  channelName: string = '';
  groupId: number | null = null;

  constructor(private groupService: GroupService, private channelService: ChannelService) {}

  ngOnInit() {
    this.groups = this.groupService.getAllGroups();
    this.channels = this.channelService.getAllChannels();
  }

  createChannel() {
    if (this.groupId !== null) {
      this.channelService.createChannel(this.channelName, this.groupId);
      this.channelName = '';
      this.channels = this.channelService.getAllChannels();
    } else {
      alert('Please select a group');
    }
  }

  deleteChannel(id: number) {
    this.channelService.deleteChannel(id);
    this.channels = this.channelService.getAllChannels();
  }
}
