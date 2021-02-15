import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/service/swapi/swapi.service';
import { ICharacter } from '../service/swapi/swapi.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  constructor(private swapiService: SwapiService) {}

  characters: ICharacter[] = [];

  ngOnInit(): void {
    this.swapiService.characters().subscribe((response) => {
      this.characters = response.results;
    });
  }
}
