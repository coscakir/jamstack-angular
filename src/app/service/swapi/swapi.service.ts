import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacter, ICharacters, IStarship } from './swapi.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private http: HttpClient) {}

  characters(pageNumber?: string): Observable<ICharacters> {
    const url = `${environment.apiUrl}/people/?page=${pageNumber}`;
    return this.http.get<ICharacters>(url);
  }

  character(id: string | null): Observable<ICharacter> {
    const url = `${environment.apiUrl}/people/${id}/`;
    return this.http.get<ICharacter>(url);
  }

  starship(id: string | null): Observable<IStarship> {
    const url = `${environment.apiUrl}/starships/${id}/`;
    return this.http.get<IStarship>(url);
  }
}
