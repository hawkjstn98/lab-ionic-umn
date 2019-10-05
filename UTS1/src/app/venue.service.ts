import {Injectable} from '@angular/core';
import {Venue} from './venue.model';

@Injectable({
    providedIn: 'root'
})
export class VenueService {

    private myBook: Venue[] = [];
    private venue: Venue[] =
        [
            new Venue(
                'v1',
                'Galaxy Futsal',
                'https://kemananihh.files.wordpress.com/2015/01/353401_taraflexgalaxy.jpg?w=459&h=344',
                'Ancol, DKI Jakarta',
                'Futsal'
            ),
            new Venue(
                'v2',
                'Cihuni Badminton Court',
                'https://serpongku.com/wp-content/uploads/2018/03/villa-melatimas.jpg',
                'Serpong, Banten',
                'Badminton'
            ),
            new Venue(
                'v3',
                'Ben\'s Stadium',
                'http://www.streetdirectory.co.id/stock_images/travel/show_resize_image.php?imageId=ind_13360389580293&w=320&h=240',
                'Bogor, Jawa Barat',
                'Futsal'
            ),
            new Venue(
                'v4',
                'Candra Wijaya Intl. Badminton Center',
                'https://serpongku.com/wp-content/uploads/2018/03/chandra.jpg',
                'Serpong, Banten',
                'Badminton'
            )
        ];

    constructor() {
    }

    getAllVenue() {
        return [...this.venue];
    }

    getMyBook() {
        return [...this.myBook];
    }

    deleteMyBook(vid: string) {
        this.myBook = this.myBook.filter(p => {
            return p.id !== vid;
        });
    }

    addMyBook(v: Venue) {
        this.myBook.push(v);
    }
}
