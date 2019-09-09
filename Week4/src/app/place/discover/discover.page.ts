import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {Place} from '../place.model';
import {PlacesService} from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  constructor(private menuCtrl: MenuController, private placeService: PlacesService) { }

  private loadedPlaces: Place[];

  ngOnInit() {
    this.loadedPlaces = this.placeService.getAllData();
  }

  onOpenMenu() {
    this.menuCtrl.toggle('m1');
  }
}
