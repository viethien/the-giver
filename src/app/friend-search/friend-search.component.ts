import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
    debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Friend } from '../friend';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-friend-search',
  templateUrl: './friend-search.component.html',
  styleUrls: ['./friend-search.component.scss']
})

export class FriendSearchComponent implements OnInit {
  friends$: Observable<Friend[]>;
  private searchTerms = new Subject<string>();

  constructor(private friendService: FriendService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.friends$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) =>
        this.friendService.searchFriends(term)),
      );
  }

}
