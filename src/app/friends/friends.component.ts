import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  friend: Friend = {
    id: 1,
    name: 'Ma',
  }

  constructor() { }

  ngOnInit() {
  }

}
