import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { Observable, of, Observer } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  // service-in-service : inject the MessageService into the HeroService
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // 在獲得Heroes時發送一條消息
    this.messageService.add('HeroService: fetched heroes');

    // 返回Observable<Herop[]>
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
