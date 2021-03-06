import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PlacesService} from "../../places.service";
import {NavController} from "@ionic/angular";
import {Place} from "../../place.model";

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  place:Place;

  constructor(
      private route: ActivatedRoute,
      private placeService: PlacesService,
      private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/place/tabs/offer');
        return;
      }
      this.place = this.placeService.getDataById(paramMap.get('placeId'))
    });
  }

}
