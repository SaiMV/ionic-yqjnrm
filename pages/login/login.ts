import { Component, ViewChild } from '@angular/core';
import { Nav, NavController } from 'ionic-angular';
import { SignUpPage } from '../signup/signup';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['login.css'],
})
export class LoginPage {
  @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController) {}
  openSingUpPage() {
    this.navCtrl.setRoot(SignUpPage);
  }
  login() {
    this.navCtrl.setRoot(HomePage);
  }
}
