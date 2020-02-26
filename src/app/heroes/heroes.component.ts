import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes'; // used at beginning of tutorial
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[];
  public selectedHero: Hero; // sets up a blank Hero to be selected

  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes() {
    // .subscribe takes the async server response, and passes it as heroes into the callback
    // once the data has been recieved
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes
    );
  }

}
