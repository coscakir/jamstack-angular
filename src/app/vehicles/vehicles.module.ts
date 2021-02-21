import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles.component';
import { VehicleComponent } from './vehicle/vehicle.component';


@NgModule({
  declarations: [VehiclesComponent, VehicleComponent],
  imports: [
    CommonModule,
    VehiclesRoutingModule
  ]
})
export class VehiclesModule { }
