import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EnquiryDetails } from '../../interfaces/EnquiryDetails';
import { AddenquiryPage } from '../addenquiry/addenquiry';

/**
 * Generated class for the ViewenquirydetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewenquirydetails',
  templateUrl: 'viewenquirydetails.html',
})
export class ViewenquirydetailsPage {

  enquiry: EnquiryDetails;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.enquiry = navParams.data.item;
  }

  editEnquiryDetails() {
    this.navCtrl.push(AddenquiryPage, { item: this.enquiry, isNewEnquiry:false });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewenquirydetailsPage');
  }

}
