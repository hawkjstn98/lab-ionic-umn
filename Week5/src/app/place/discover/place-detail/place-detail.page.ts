import { Component, OnInit } from '@angular/core';
import {PlacesService} from "../../places.service";
import {ActivatedRoute} from "@angular/router";
import {Place} from "../../place.model";
import {ModalController, NavController} from "@ionic/angular";
import {CreateBookingComponent} from "../../../booking/create-booking/create-booking.component";

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  places: Place;

  constructor(private place: PlacesService, private activatedRoute: ActivatedRoute,
              private navCtrl: NavController, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
        paramMapper => {
          if(!paramMapper.has('placeId')){return ;}
          this.places = this.place.getDataById(paramMapper.get('placeId'));
        }
    );
  }

  bookPlace(){
    this.modalCtrl.create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.places}})
        .then(modalElement => {
            modalElement.present();
            return modalElement.onDidDismiss();
        })
        .then(resultData => {
            console.log(resultData.data, resultData.role);
            if(resultData.role === 'confirm'){
                console.log('BOOKED');
            }
        })
  }
}
