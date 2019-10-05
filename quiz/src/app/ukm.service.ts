import {Injectable} from '@angular/core';
import {Ukm} from './ukm.model';

@Injectable({
    providedIn: 'root'
})
export class UkmService {

    private ukm: Ukm[] =
        [
            new Ukm(
                'Basket',
                'Basket adalah UKM blablablablabla'),
            new Ukm(
                'Drama',
                'Drama adalah UKM blablablablabla'),
            new Ukm(
                'Volly',
                'Volly adalah UKM blablablablabla'),
            new Ukm(
                'Futsal',
                'Futsal adalah UKM blablablablabla')
        ];

    private myUkm: Ukm[] = [];

    constructor() {
    }

    getAllUkm() {
        return [...this.ukm];
    }

    getAllMyUkm() {
        return [...this.myUkm];
    }

    addMyUkm(u: Ukm) {
        this.myUkm.push(u);
    }
}
