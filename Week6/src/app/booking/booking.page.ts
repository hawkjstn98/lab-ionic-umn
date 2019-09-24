import { Component, OnInit } from '@angular/core';
import {Booking} from "./booking.model";
import {BookingService} from "./booking.service";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  myBooking: Booking[];

  constructor(private bookingSvc: BookingService) { }

  ngOnInit() {
    this.myBooking = this.bookingSvc.getAllData();
  }

  deleteBook(id: string){
    this.bookingSvc.deleteData(id);
    this.ngOnInit();
  }

}
