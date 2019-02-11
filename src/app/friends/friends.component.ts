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

  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.friendService.addFriend({ name } as Friend)
        .subscribe(friend => {
          this.friends.push(friend);
        });
  }

  constructor(private friendService: FriendService) { }

  ngOnInit() {
    this.getFriends();
  }

}
