import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlacePage} from './place.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: PlacePage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: './discover/discover.module#DiscoverPageModule'
          },
          {
            path: ':placeId',
            loadChildren: './discover/place-detail/place-detail.module#PlaceDetailPageModule'
          }
        ]
      },
      {
        path: 'offer',
        children: [
          {
            path: '',
            loadChildren: './offer/offer.module#OfferPageModule'
          },
          {
            path: 'new',
            loadChildren: './offer/new-offer/new-offer.module#NewOfferPageModule'
          },
          {
            path: 'edit/:placeId',
            loadChildren: './offer/edit-offer/edit-offer.module#EditOfferPageModule'
          },
          {
            path: ':placeId',
            loadChildren: './offer/offer-booking/offer-booking.module#OfferBookingPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/place/tabs/discover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/place/tabs/discover',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PlaceRoutingModule {}
