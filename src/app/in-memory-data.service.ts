import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Friend } from './friend';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const friends = [
      { id: 11, name: 'Seepok' },
      { id: 12, name: 'Nhimbo' },
      { id: 13, name: 'Babby' },
      { id: 14, name: 'Mamita' },
      { id: 15, name: 'Jam' },
      { id: 16, name: 'Ayden' },
      { id: 17, name: 'Vurv' },
      { id: 18, name: 'Eddie' },
      { id: 19, name: 'Mas' },
      { id: 20, name: 'Tom' },
    ];
    return { friends };
  }

  genId(friends: Friend[]): number {
    return friends.length > 0 ? Math.max(...friends.map(friend => friend.id)) + 1 : 11;
  }

  constructor() { }
}
