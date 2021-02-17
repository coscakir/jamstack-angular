import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
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
}
