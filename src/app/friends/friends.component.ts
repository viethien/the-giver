import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends: Friend[];

  selectedFriend: Friend;

  onSelect(friend: Friend): void {
    this.selectedFriend = friend;
  }

  getFriends(): void {
    this.friends = this.friendService.getFriends();
  }

  constructor(private friendService: FriendService) { }

  ngOnInit() {
    this.getFriends();
  }

}
