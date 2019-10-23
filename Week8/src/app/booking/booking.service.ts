import { Injectable } from '@angular/core';
import {Booking} from "./booking.model";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private booking: Booking[] = [
      new Booking('b1', 'p1','user','Ruko Bolsena','2'),
      new Booking('b2', 'p2', 'user', 'scientia residence', '8')
  ];

  getAllData(){
    return this.booking;
  }

  deleteData(id: string){
    let index: number = this.booking.map(function (bookings) {
      return bookings.id
    }).indexOf(id);
    if(index > -1 && index != null){
      this.booking.splice(index, 1);
    }
  }

  constructor() { }
}
