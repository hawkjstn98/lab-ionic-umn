import {Component, OnInit} from '@angular/core';
import {VenueService} from '../venue.service';
import {Venue} from '../venue.model';
import {AlertController, ToastController} from '@ionic/angular';

@Component({
    selector: 'app-browse',
    templateUrl: './browse.page.html',
    styleUrls: ['./browse.page.scss'],
})
export class BrowsePage implements OnInit {

    private venue: Venue[];

    constructor(private venueSvc: VenueService,
                private alertCtrl: AlertController,
                private toastCtrl: ToastController) {
    }

    ngOnInit() {
        this.venue = this.venueSvc.getAllVenue();
    }

    async bookVenue(v: Venue) {
        const alert = await this.alertCtrl.create({
            header: 'Book Venue',
            message: 'Are you sure want to book this venue ?',
            buttons: [
                {
                    text: 'YES',
                    handler: () => {
                        this.venueSvc.addMyBook(v);
                        this.confirm();
                        this.alertCtrl.dismiss();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        this.alertCtrl.dismiss();
                    }
                }
            ]
        });

        await alert.present();
    }

    async confirm() {
        const toast = await this.toastCtrl.create({
            message: 'Congratulations, your booking has been successfully made',
            duration: 2000
        });
        toast.present();
    }
}
