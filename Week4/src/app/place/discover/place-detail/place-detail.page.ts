import { Component, OnInit } from '@angular/core';
import {PlacesService} from "../../places.service";
import {ActivatedRoute} from "@angular/router";
import {Place} from "../../place.model";

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  places: Place;

  constructor(private place: PlacesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
        paramMapper => {
          if(!paramMapper.has('placeId')){return ;}
          this.places = this.place.getDataById(paramMapper.get('placeId'));
        }
    );
  }
}
