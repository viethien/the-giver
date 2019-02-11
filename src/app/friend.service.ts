import { Injectable } from '@angular/core';
import { Friend } from './friend';
//import { FRIENDS } from './mock-friends';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FriendService {

  getFriends(): Observable<Friend[]> {
    //this.messageService.add('FriendService: fetched friends');
    return this.http.get<Friend[]>(this.friendsUrl)
    .pipe(
      //_ refers to unused parameter
      tap(_ => this.log(`fetched friends`)),
      catchError(this.handleError('getFriends', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.messages}`);
      return of(result as T);
    }
  }

  getFriend(id: number): Observable<Friend> {
    //todo: send message after fetching the Hero
    //this.messageService.add(`FriendService: fetched friend id=${id}`);
    const url = `${this.friendsUrl}/${id}`
    return this.http.get<Friend>(url).pipe(
      tap(_ => this.log(`fetched friend id=${id}`)),
      catchError(this.handleError<Friend>(`getFriend id=${id}`))
    );
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
