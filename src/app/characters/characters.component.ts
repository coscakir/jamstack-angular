import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/service/swapi/swapi.service';
import { ICharacters } from '../service/swapi/swapi.interface';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  constructor(private swapiService: SwapiService, private router: Router) {}

  characters: ICharacters = {} as ICharacters;
  loading = false;

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(pageNumber?: string): void {
    this.loading = true;
    this.swapiService
      .characters(pageNumber || '')
      .pipe(take(1))
      .subscribe((response) => {
        this.characters = response;
        this.loading = false;
      });
  }

  getCharacterId(url: string): string {
    return url.split('people/')[1].replace('/', '');
  }

  goToNextPage(): void {
    const pageNumber = this.characters.next.split('page=')[1];
    this.getCharacters(pageNumber);
  }

  goToPreviousPage(): void {
    const pageNumber = this.characters.previous.split('page=')[1];
    this.getCharacters(pageNumber);
  }
}
