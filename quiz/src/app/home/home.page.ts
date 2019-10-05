import {Component, OnInit} from '@angular/core';
import {UkmService} from '../ukm.service';
import {Ukm} from '../ukm.model';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    private ukm: Ukm[];

    constructor(private ukmSvc: UkmService,
                private alertCtrl: AlertController) {
    }

    ngOnInit() {
      this.ukm = this.ukmSvc.getAllUkm();
    }

  async alertJoin(u: Ukm) {
    const alert = await this.alertCtrl.create({
      header: '',
      message: '<strong>Beneran Mau Join</strong>?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.alertCtrl.dismiss();
          }
        }, {
          text: 'Serius',
          handler: () => {
            this.ukmSvc.addMyUkm(u);
            this.alertCtrl.dismiss();
          }
        }
      ]
    });

    await alert.present();
  }

}
