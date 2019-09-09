import { Component, OnInit } from '@angular/core';
import {PlacesService} from "../places.service";
import {Place} from "../place.model";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
})
export class OfferPage implements OnInit {

  constructor(private placeService: PlacesService) { }

  private loadedPlace: Place[];

  ngOnInit() {
    this.loadedPlace = this.placeService.getAllData();
  }

}
