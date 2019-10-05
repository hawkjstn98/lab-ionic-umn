import {Component, OnInit} from '@angular/core';
import {Venue} from '../venue.model';
import {VenueService} from '../venue.service';

@Component({
    selector: 'app-booking',
    templateUrl: './booking.page.html',
    styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

    private myBook: Venue[] = [];

    constructor(
        private venueSvc: VenueService
    ) {
    }

    ngOnInit() {
        this.myBook = this.venueSvc.getMyBook();
        if (this.myBook.length === 0) {
            document.querySelector('.text-empty').innerHTML = 'There are no bookings at the moment';
        }
    }

    ionViewWillEnter() {
        this.ngOnInit();
    }

    deleteMyBook(v: string) {
        this.venueSvc.deleteMyBook(v);
        this.ngOnInit();
    }
}
