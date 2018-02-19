import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { CreatebatchPage } from '../createbatch/createbatch';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  createBatch() {
    let modal = this.modalCtrl.create(CreatebatchPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BatchPage');
  }

}
