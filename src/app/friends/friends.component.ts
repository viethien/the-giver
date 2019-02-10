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

  getFriends(): void {
    this.friendService.getFriends()
        .subscribe(friends => this.friends = friends);
  }

  constructor(private friendService: FriendService) { }

  ngOnInit() {
    this.getFriends();
  }

}
