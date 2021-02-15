import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacter, ICharacters } from './swapi.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private http: HttpClient) {}

  characters(): Observable<ICharacters> {
    const url = `${environment.apiUrl}/people/`;
    return this.http.get<ICharacters>(url);
  }

  character(id: string): Observable<ICharacter> {
    const url = `${environment.apiUrl}/people/${id}/`;
    return this.http.get<ICharacter>(url);
  }
}