import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: Place[];
  private placeSub: Subscription;

  constructor(private placesService: PlacesService, private router: Router) { }

  ngOnInit() {
    this.placeSub = this.placesService.places.subscribe(place => this.offers = place);
    // this.offers = this.placesService.places.subscribe(place => place);
  }

  ngOnDestroy() {
    this.placeSub.unsubscribe();
  }

  onEdit(offerId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId]);
    console.log('Editing item', offerId);
  }

}
