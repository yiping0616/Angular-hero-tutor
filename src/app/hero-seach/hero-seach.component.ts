import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-seach',
  templateUrl: './hero-seach.component.html',
  styleUrls: ['./hero-seach.component.css']
})
export class HeroSeachComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  // RxJS Subject類型 : both a source of observable values and an Observable
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  // Push a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // 縮減number of calls to the searchHeroes()
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term(確保過濾條件有變化才發送request)
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap( (term: string) => this.heroService.searchHeroes(term))
    );
  }

}
