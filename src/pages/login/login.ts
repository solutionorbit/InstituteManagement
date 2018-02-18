import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { TouchID } from '@ionic-native/touch-id';

import { UserDetails } from '../../interfaces/UserDetails';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userDetails: UserDetails = <UserDetails>{};
  constructor(public navCtrl: NavController, public navParams: NavParams,private touchId: TouchID) {
    
  }

  logIn(form: NgForm) {
    this.navCtrl.push(TabsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  startTouchID() {
    this.touchId.verifyFingerprint('Scan your fingerprint please')
      .then(
      res => this.navCtrl.push(TabsPage),
      err => console.error('Error', err)
      );
  }


}
