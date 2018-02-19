import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MasterdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-masterdata',
  templateUrl: 'masterdata.html',
})
export class MasterdataPage {

  totalSubjects: number;
  totalModules: number;
  totalQuestions: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeCount();
  }

  initializeCount() {
    this.totalSubjects = 6;
    this.totalModules = 26;
    this.totalQuestions = 103;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasterdataPage');
  }

}
