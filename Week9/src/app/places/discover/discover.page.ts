import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { SegmentChangeEventDetail } from '@ionic/core';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];
  listedLoadedPlaces: Place[];
  private placeSub: Subscription;

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    // this.loadedPlaces = this.placesService.places;
    this.placeSub = this.placesService.places.subscribe(res => this.loadedPlaces = res);
    this.listedLoadedPlaces = this.loadedPlaces.slice(1);
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }

  ngOnDestroy() {
    if(this.placeSub){
      this.placeSub.unsubscribe();
    }
  }

}
