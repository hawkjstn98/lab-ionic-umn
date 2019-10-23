import {Component, OnInit} from '@angular/core';
import {PlacesService} from '../../places.service';
import {ActivatedRoute} from '@angular/router';
import {Place} from '../../place.model';
import {ActionSheetController, ModalController, NavController} from '@ionic/angular';
import {CreateBookingComponent} from '../../../booking/create-booking/create-booking.component';

@Component({
    selector: 'app-place-detail',
    templateUrl: './place-detail.page.html',
    styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

    places: Place;

    constructor(private place: PlacesService, private activatedRoute: ActivatedRoute,
                private navCtrl: NavController, private modalCtrl: ModalController,
                private actionSheetCtrl: ActionSheetController) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(
            paramMapper => {
                if (!paramMapper.has('placeId')) {
                    return;
                }
                this.places = this.place.getDataById(paramMapper.get('placeId'));
            }
        );
    }

    bookPlace() {
        this.actionSheetCtrl.create({
            header: 'Choose an Action',
            buttons: [
                {
                    text: 'Select Date',
                    handler: () => {
                        this.openBookModal('select');
                    }
                },
                {
                    text: 'Random Date',
                    handler: () => {
                        this.openBookModal('random');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        }).then(actionSheetEl => {
            actionSheetEl.present();
        });
    }

    openBookModal(mode: 'select' | 'random') {
        this.modalCtrl.create({
            component: CreateBookingComponent,
            componentProps: {selectedPlace: this.places, selectedMode: mode}
        })
            .then(modalElement => {
                modalElement.present();
                return modalElement.onDidDismiss();
            })
            .then(resultData => {
                console.log(resultData.data, resultData.role);
                if (resultData.role === 'confirm') {
                    console.log('BOOKED');
                }
            });
    }
}
