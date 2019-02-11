import { Injectable } from '@angular/core';
import { Friend } from './friend';
//import { FRIENDS } from './mock-friends';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FriendService {

  getFriends(): Observable<Friend[]> {
    this.messageService.add('FriendService: fetched friends');
    return this.http.get<Friend[]>(this.friendsUrl);
  }

  getFriend(id: number): Observable<Friend> {
    //todo: send message after fetching the Hero
    this.messageService.add(`FriendService: fetched friend id=${id}`);
    return of(FRIENDS.find(friend => friend.id === id));
  }

  private log(message: string) {
    this.messageService.add(`FriendService: ${message}`);
  }

  //url to web api and friends object
  private friendsUrl = 'api/friends';

  constructor(
    private http: HttpClient,
    private messageService: MessageService,) { }
}
