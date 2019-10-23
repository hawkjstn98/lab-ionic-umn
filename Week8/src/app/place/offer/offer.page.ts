import { Component, OnInit } from '@angular/core';
import {PlacesService} from "../places.service";
import {Place} from "../place.model";
import {IonItemSliding} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
})
export class OfferPage implements OnInit {

  constructor(private placeService: PlacesService, private router: Router) { }

  private loadedPlace: Place[];

  ngOnInit() {
    this.loadedPlace = this.placeService.getAllData();
  }

  editOffer(id: string, slidingItem: IonItemSliding){
    slidingItem.close();
    this.router.navigate(['/', 'place', 'tabs', 'offer', 'edit', id]);
  }

}
