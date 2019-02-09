import { Injectable } from '@angular/core';
import { Friend } from './friend';
import { FRIENDS } from './mock-friends';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  getFriends(): Friend[] {
    return FRIENDS;
  }

  constructor() { }
}
