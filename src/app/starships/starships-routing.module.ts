import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipComponent } from './starship/starship.component';
import { StarshipsComponent } from './starships.component';

const routes: Routes = [
  { path: '', component: StarshipsComponent },
  { path: ':id', component: StarshipComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarshipsRoutingModule {}
