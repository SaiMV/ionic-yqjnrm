import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { OverviewPage } from '../overview/overview';
import { ReadVarExpr } from '@angular/compiler';
import { ReviewPage } from '../review/review';
import { IteneraryPage } from '../itenerary/itenerary';
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  private tabs: { title: string; root: any; icon: string }[];
  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1Root = OverviewPage;
    this.tab2Root = IteneraryPage;
    this.tab3Root = ReviewPage;
    // this.tab4Root = AboutPage;
    // this.tabs = [
    //   { title: "Schedule", root:OverviewPage , icon: "calendar" },
    //   { title: "Speakers", root: ReviewPage, icon: "contacts" },
    //   { title: "Map", root: IteneraryPage, icon: "map" }
    // ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
}
