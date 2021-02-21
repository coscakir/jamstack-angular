import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipsComponent } from './starships.component';
import { StarshipComponent } from './starship/starship.component';


@NgModule({
  declarations: [StarshipsComponent, StarshipComponent],
  imports: [
    CommonModule,
    StarshipsRoutingModule
  ]
})
export class StarshipsModule { }
