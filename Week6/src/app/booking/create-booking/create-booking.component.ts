import {Component, Input, OnInit} from '@angular/core';
import {Place} from "../../place/place.model";
import {ActionSheetController, LoadingController, ModalController} from "@ionic/angular";

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
    @Input() selectedPlace: Place;

  constructor(private modalCtrl: ModalController, private loadingCtrl: LoadingController,
              private actionSheetCtrl: ActionSheetController){}

  ngOnInit() {

  }

  onCancel() {
      this.modalCtrl.dismiss(null, 'cancel');
  }


  async onBookPlace(){
      const actionSheet = await this.actionSheetCtrl.create({
          header: 'Book Place',
          buttons: [{
              text: 'Book w/ Random Date',
              handler: () => {
                  this.loadingCtrl.create({
                      keyboardClose: true,
                      message: 'Booking the place ...'
                  }).then(loadingElement => {
                     loadingElement.present();
                     setTimeout(() =>{
                         loadingElement.dismiss();
                         this.modalCtrl.dismiss({message: "Booked!"}, 'confirm');
                     }, 2000)
                  });
              }
          }, {
              text: 'Cancel',
              role: 'cancel',
              handler: () =>{
                  console.log('Cancel Clicked');
              }
          }]
      });
      await actionSheet.present();
      // this.loadingCtrl.create({
      //     keyboardClose: true,
      //     message: 'Booking the place ...'
      // }).then(loadingElement => {
      //    loadingElement.present();
      //    setTimeout(() =>{
      //        loadingElement.dismiss();
      //        this.modalCtrl.dismiss({message: "Booked!"}, 'confirm');
      //    }, 2000)
      // });
  }
}
