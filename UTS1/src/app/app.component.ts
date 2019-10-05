import {Component} from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private router: Router,
        private menuCtrl: MenuController
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    toBrowseVenue() {
        this.router.navigateByUrl('/browse');
        this.btnClose();
    }

    toMyBookings() {
        this.router.navigateByUrl('/booking');
        this.btnClose();
    }

    btnClose() {
        this.menuCtrl.toggle('m1');
    }


    onLogout() {
        this.router.navigateByUrl('/home');
        this.btnClose()
    }
}
