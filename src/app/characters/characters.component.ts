import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/service/swapi/swapi.service';
import { ICharacter } from '../service/swapi/swapi.interface';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  constructor(private swapiService: SwapiService) {}

  characters: ICharacter[] = [];
  loading = true;

  ngOnInit(): void {
    this.swapiService
      .characters()
      .pipe(take(1))
      .subscribe((response) => {
        this.characters = response.results;
        this.loading = false;
      });
  }

  goToCharacterDetail(character: ICharacter): void {
    console.log(character);
  }
}
