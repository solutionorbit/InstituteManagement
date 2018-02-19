import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AdmissionDetails } from '../../interfaces/AdmissionDetails';
import { AddadmissionPage } from '../addadmission/addadmission';

/**
 * Generated class for the ViewadmissiondetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewadmissiondetails',
  templateUrl: 'viewadmissiondetails.html',
})
export class ViewadmissiondetailsPage {

  admission: AdmissionDetails;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.admission = navParams.data.item;
  }

  editAdmissionDetails() {
    this.navCtrl.push(AddadmissionPage, { item: this.admission, isNewEnquiry: false });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewadmissiondetailsPage');
  }

}
