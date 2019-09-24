import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PlacePage } from './place.page';
import { PlaceRoutingModule } from './place-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PlaceRoutingModule
  ],
  declarations: [PlacePage]
})
export class PlacePageModule {}
