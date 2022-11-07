import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MonsterList } from '../interfaces/monstersResponse';

@Injectable({
  providedIn: 'root',
})
export class DndApiService {
  constructor(private http: HttpClient) {}

  public getMonsters(): Observable<MonsterList> {
    return this.http.get<MonsterList>('https://www.dnd5eapi.co/api/monsters');
  }
}
