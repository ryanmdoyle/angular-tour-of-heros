import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  selectedHero: Hero; // sets up a blank Hero to be selected

  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
