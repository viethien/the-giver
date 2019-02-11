import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Friend } from '../friend';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-friend-detail',
  templateUrl: './friend-detail.component.html',
  styleUrls: ['./friend-detail.component.scss']
})



export class FriendDetailComponent implements OnInit {
  @Input() friend: Friend;

  constructor(
    private route: ActivatedRoute,
    private friendService: FriendService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getFriend();
  }

  getFriend(): void {
    //extract id from route
    //route.snapshot is static image of the route info shortly after component created
    //+ operater converts string to a number - don't forget route parameters are always strings
    const id = +this.route.snapshot.paramMap.get('id');
    this.friendService.getFriend(id)
        .subscribe(friend => this.friend = friend);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.friendService.updateFriend(this.friend)
        .subscribe(() => this.goBack));
  }

}
