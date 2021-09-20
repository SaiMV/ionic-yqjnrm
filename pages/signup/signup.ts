import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['signup.css'],

})
export class SignUpPage {
  constructor(public navCtrl: NavController) {}

  openSingInPage() {
    this.navCtrl.setRoot(LoginPage);
  }
}
