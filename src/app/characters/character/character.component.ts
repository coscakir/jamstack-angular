import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { from, Observable } from 'rxjs';
import { concatMap, switchMap, take, takeUntil } from 'rxjs/operators';
import { ICharacter } from 'src/app/service/swapi/swapi.interface';
import { SwapiService } from 'src/app/service/swapi/swapi.service';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute
  ) {}

  characterId: string | null = this.route.snapshot.paramMap.get('id');
  character: ICharacter | undefined;

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(): void {
    this.swapiService
      .character(this.characterId)
      .pipe(take(1))
      .subscribe((response) => (this.character = response));
  }

  getFilmId(film: string): string {
    return film.split('films/')[1].replace('/', '');
  }

  getStarshipId(starship: string): string {
    return starship.split('starships/')[1].replace('/', '');
  }

  getVehicleId(vehicle: string): string {
    return vehicle.split('vehicles/')[1].replace('/', '');
  }
}
