import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  private channels = [
    { id: 1, name: 'Channel 1', groupId: 1 },
    { id: 2, name: 'Channel 2', groupId: 2 }
  ];

  getAllChannels() {
    return this.channels;
  }

  createChannel(name: string, groupId: number) {
    const newChannel = { id: this.channels.length + 1, name, groupId };
    this.channels.push(newChannel);
  }

  deleteChannel(id: number) {
    this.channels = this.channels.filter(channel => channel.id !== id);
  }
}