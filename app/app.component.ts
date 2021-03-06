import { Component, Input, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html',
  styleUrls: ['styles.css'],
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  @Input() isToggleMenuClicked: boolean = true;

  pages: Array<{ title: string; component: any }>;
  public innerHeightOfDevice: string;

  constructor(
    public platform: Platform // public statusBar: StatusBar,
  ) // public splashScreen: SplashScreen
  {
    this.initializeApp();

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // splashScreen.hide();
      // let innerClientDevHight: any = platform.height();
      // this.innerHeightOfDevice = innerClientDevHight + "px !important;";
      // document.querySelector('ion-app').setAttribute("style", "height:" + this.innerHeightOfDevice);
      // document.querySelector('ng-component').setAttribute("style", "height:" + this.innerHeightOfDevice);
    }); // used for an example of ngFor and navigation
    this.pages = [
      { title: '', component: LoginPage },
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
    ];
  }

  toggleMenuClicked() {
    this.isToggleMenuClicked = !this.isToggleMenuClicked;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.backgroundColorByHexString('#ffffff');
      // this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
