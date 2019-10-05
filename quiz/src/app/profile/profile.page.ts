import {Component, OnInit} from '@angular/core';
import {Ukm} from '../ukm.model';
import {UkmService} from '../ukm.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    myUkm: Ukm[];

    constructor(private ukmSvc: UkmService) {
    }

    ngOnInit(): void {
        this.myUkm = this.ukmSvc.getAllMyUkm();
    }

    ionViewWillEnter() {
        this.ngOnInit();
    }

    deleteUkm(u: string) {
        this.myUkm = this.myUkm.filter(p => {
            return p.nama !== u;
        });
    }

}
