import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  // constructor保持簡單，只做初始化操作(eq. writing constructor parameters to properties(屬性))
  constructor(private heroService: HeroService) { }

  // Angular call ngOnInit() at an appropriate time after constructing a HeroesComponent
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // 此為同步，若HeroService向server request，就不可用同步的方法
    // this.heroes = this.heroService.getHeroes();
    // 非同步方式 subscribe pass array to callback
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
