import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {Place} from '../place.model';
import {PlacesService} from '../places.service';
import {SegmentChangeEventDetail} from '@ionic/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  constructor(private menuCtrl: MenuController, private placeService: PlacesService) { }

  private loadedPlaces: Place[];
  private listLoadedPlaces: Place[];

  ngOnInit() {
    this.loadedPlaces = this.placeService.getAllData();
    this.listLoadedPlaces = this.loadedPlaces.slice(1);
  }

  onOpenMenu() {
    this.menuCtrl.toggle('m1');
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }
}
