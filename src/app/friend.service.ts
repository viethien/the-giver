import { Injectable } from '@angular/core';
import { Friend } from './friend';
//import { FRIENDS } from './mock-friends';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class FriendService {
  //url to web api and friends object
  private friendsUrl = 'api/friends';


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
    const url = `${this.friendsUrl}/${id}`;
    return this.http.get<Friend>(url).pipe(
      tap(_ => this.log(`fetched friend id=${id}`)),
      catchError(this.handleError<Friend>(`getFriend id=${id}`))
    );
  }

  updateFriend(friend: Friend): Observable<any> {
    return this.http.put(this.friendsUrl, friend, httpOptions).pipe(
      tap(_ => this.log(`updated friend id=${friend.id}`)),
      catchError(this.handleError<any>(`updateFriend`))
    );
  }

  addFriend(friend: Friend): Observable<Friend> {
    return this.http.post<Friend>(this.friendsUrl, friend, httpOptions).pipe(
      tap((newFriend: Friend) => this.log(`added friend w/ id=${newFriend.id}`)),
      catchError(this.handleError<Friend>(`addFriend`))
    );
  }

  searchFriends(term: string): Observable<Friend[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Friend[]>(`${this.friendsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found friends matching "${term}"`)),
      catchError(this.handleError<Friend[]>('searchFriends', []))
    );
  }

  deleteFriend(friend: Friend | number): Observable<Friend> {
    const id = typeof friend === 'number' ? friend : friend.id;
    const url = `${this.friendsUrl}/${id}`;

    return this.http.delete<Friend>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted friend id=${id}`)),
      catchError(this.handleError<Friend>('deleteFriend'))
    );
  }

  private log(message: string) {
    this.messageService.add(`FriendService: ${message}`);
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService,) { }
}
