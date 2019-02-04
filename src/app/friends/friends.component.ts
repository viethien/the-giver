import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { FRIENDS } from '../mock-friends';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  friends = FRIENDS;

  constructor() { }

  ngOnInit() {
  }

}
