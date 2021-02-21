import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./characters/characters.module').then((m) => m.CharactersModule),
  },
  {
    path: 'starships',
    loadChildren: () =>
      import('./starships/starships.module').then((m) => m.StarshipsModule),
  },
  {
    path: 'vehicles',
    loadChildren: () =>
      import('./vehicles/vehicles.module').then((m) => m.VehiclesModule),
  },
  {
    path: 'films',
    loadChildren: () =>
      import('./films/films.module').then((m) => m.FilmsModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'articles',
    loadChildren: () =>
      import('./articles/articles.module').then((m) => m.ArticlesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
