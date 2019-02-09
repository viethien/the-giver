import { Injectable } from '@angular/core';
import { Friend } from './friend';
import { FRIENDS } from './mock-friends';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class FriendService {

  getFriends(): Observable<Friend[]> {
    this.messageService.add('FriendService: fetched friends');
    return of(FRIENDS);
  }

  constructor(private messageService: MessageService) { }
}
