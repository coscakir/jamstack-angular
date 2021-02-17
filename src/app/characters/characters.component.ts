import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/service/swapi/swapi.service';
import { ICharacter, ICharacters } from '../service/swapi/swapi.interface';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  constructor(private swapiService: SwapiService, private router: Router) {}

  characters: ICharacter[] = [];
  loading = true;

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.swapiService
      .characters()
      .pipe(take(1))
      .subscribe((response) => {
        this.characters = response.results;
        this.loading = false;
      });
  }

  goToCharacterDetail(character: ICharacter): void {
    const characterId = character.url.split('people/')[1];
    this.router.navigate([`/characters/${characterId}`]);
  }
}
