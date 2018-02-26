import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { CreatebatchPage } from '../createbatch/createbatch';
import { BatchDetails } from '../../interfaces/BatchDetails';

/**
 * Generated class for the BatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-batch',
  templateUrl: 'batch.html',
})
export class BatchPage {

  batchList: Array<BatchDetails>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.initializeBatchList();
  }

  initializeBatchList() {
    this.batchList = [{ batchID: 'bt11222', batchName: 'Morning Batch', startDate: new Date(), endDate: new Date(), studentCount: 5 },
    { batchID: 'bt11223', batchName: 'Evening Batch', startDate: new Date(), endDate: new Date(), studentCount: 15 },
    { batchID: 'bt11224', batchName: 'Afternoon Batch', startDate: new Date(), endDate: new Date(), studentCount: 51 },
    { batchID: 'bt11225', batchName: 'School Batch', startDate: new Date(), endDate: new Date(), studentCount: 52 },
    { batchID: 'bt11226', batchName: 'Maths Batch', startDate: new Date(), endDate: new Date(), studentCount: 35 },
    { batchID: 'bt11227', batchName: 'Social Batch', startDate: new Date(), endDate: new Date(), studentCount: 25 },
    { batchID: 'bt11228', batchName: 'Science Batch', startDate: new Date(), endDate: new Date(), studentCount: 25 }];
  }

  selectBatch(batch: BatchDetails) {

  }

  createBatch() {
    let modal = this.modalCtrl.create(CreatebatchPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BatchPage');
  }

}
