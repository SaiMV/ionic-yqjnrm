import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css'],
})
export class HomePage {
  categories = [
    {
      id: 1,
      thumb: '',
      title: 'Honey Moon ',
      noOfPlaces: '50 Places',
      cost: 100000,
    },
    {
      id: 2,
      thumb: '',
      title: 'Adventure ',
      noOfPlaces: '100 Places',
      cost: 100000,
    },
    {
      id: 3,
      thumb: '',
      title: 'Fun ',
      noOfPlaces: '50Places',
      cost: 100000,
    },
    {
      id: 1,
      thumb: '',
      title: 'Honey Moon ',
      noOfPlaces: '50 Places',
      cost: 100000,
    },
    {
      id: 2,
      thumb: '',
      title: 'Adventure ',
      noOfPlaces: '100 Places',
      cost: 100000,
    },
    {
      id: 3,
      thumb: '',
      title: 'Fun ',
      noOfPlaces: '50Places',
      cost: 100000,
    },
  ];
  cards = [
    {
      id: 1,
      thumb: '',
      title: 'Around God Own Country ',
      period: '5D & 4N',
      cost: 100000,
    },
    {
      id: 2,
      thumb: '',
      title: 'Around God Own Country ',
      period: '5D & 4N',
      cost: 100000,
    },
    {
      id: 3,
      thumb: '',
      title: 'Around God Own Country ',
      period: '5D & 4N',
      cost: 100000,
    },
    {
      id: 1,
      thumb: '',
      title: 'Around God Own Country ',
      period: '5D & 4N',
      cost: 100000,
    },
    {
      id: 2,
      thumb: '',
      title: 'Around God Own Country ',
      period: '5D & 4N',
      cost: 100000,
    },
    {
      id: 3,
      thumb: '',
      title: 'Around God Own Country ',
      period: '5D & 4N',
      cost: 100000,
    },
  ];
  isToggleMenuClicked: boolean = true;
  constructor(public navCtrl: NavController) {}

  toggleMenuClicked() {
    this.isToggleMenuClicked = !this.isToggleMenuClicked;
  }
  navDetailPage() {
    this.navCtrl.push(DetailPage);
  }
}
