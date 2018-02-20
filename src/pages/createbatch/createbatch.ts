import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BatchDetails } from '../../interfaces/BatchDetails';
import { AddstudenttobatchPage } from '../addstudenttobatch/addstudenttobatch';

/**
 * Generated class for the CreatebatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createbatch',
  templateUrl: 'createbatch.html',
})
export class CreatebatchPage {

  batch: BatchDetails;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.batch = { batchID: '', batchName: '', endDate: new Date(), startDate: new Date() };
  }

  addStudent() {
    this.navCtrl.push(AddstudenttobatchPage, { batch: this.batch });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatebatchPage');
  }

}