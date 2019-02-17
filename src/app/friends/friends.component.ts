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

  add(name: string, bday: string): void {
    name = name.trim();
    bday = bday.trim();
    if(!name || !bday) { return; }
    this.friendService.addFriend({ name, bday } as Friend)
        .subscribe(friend => {
          this.friends.push(friend);
        });
  }

  delete(friend: Friend): void {
    this.friends = this.friends.filter(h => h !== friend);
    this.friendService.deleteFriend(friend).subscribe();
  }

  constructor(private friendService: FriendService) { }

  ngOnInit() {
    this.getFriends();
  }

}
