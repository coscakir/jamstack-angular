import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films.component';
import { FilmComponent } from './film/film.component';

const routes: Routes = [
  { path: '', component: FilmsComponent },
  { path: ':id', component: FilmComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsRoutingModule {}
