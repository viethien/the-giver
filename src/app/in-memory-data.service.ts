import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Friend } from './friend';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const friends = [
      { id: 11, name: 'Seepok', bday: '4/21/1984', gifts: [] },
      { id: 12, name: 'Nhimbo', bday: '9/9/1979', gifts: [] },
      { id: 13, name: 'Babby', bday: '1/31/1955', gifts: [] },
      { id: 14, name: 'Mamita', bday: '9/10/1955', gifts: [] },
      { id: 15, name: 'Jam', bday: '10/8/2000', gifts: [] },
      { id: 16, name: 'Ayden', bday: '5/26/2006', gifts: [] },
      { id: 17, name: 'Vurv', bday: '12/30/1970', gifts: [] },
      { id: 18, name: 'Eddie', bday: '1/31/1980', gifts: [] },
      { id: 19, name: 'Mas', bday: '8/16/1973', gifts: [] },
      { id: 20, name: 'Tom', bday: '1/8/1980', gifts: [] },
    ];
    return { friends };
  }

  genId(friends: Friend[]): number {
    return friends.length > 0 ? Math.max(...friends.map(friend => friend.id)) + 1 : 11;
  }

  constructor() { }
}
