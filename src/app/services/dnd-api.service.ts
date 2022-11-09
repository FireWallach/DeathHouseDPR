import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MonsterList, monsterListing } from '../interfaces/monstersResponse';
import { Monster } from '../interfaces/monster';

@Injectable({
  providedIn: 'root',
})
export class DndApiService {
  constructor(private http: HttpClient) {}

  public getMonsters(): Observable<MonsterList> {
    return this.http.get<MonsterList>('https://www.dnd5eapi.co/api/monsters');
  }

  public getMonsterByName(monster: monsterListing): Observable<Monster> {
    return this.http.get<Monster>(`https://www.dnd5eapi.co${monster.url}`);
  }
}
