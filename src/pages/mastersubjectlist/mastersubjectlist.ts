import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MasterSubjectList } from '../../interfaces/MasterSubjectList';

/**
 * Generated class for the MastersubjectlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mastersubjectlist',
  templateUrl: 'mastersubjectlist.html',
})
export class MastersubjectlistPage {

  subjectList: Array<MasterSubjectList>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getSubjectList();
  }

  getSubjectList() {
    this.subjectList = [
      { subjectID: '101', totalModules: 50, subjectName: 'Mathematics' },
      { subjectID: '102', totalModules: 23, subjectName: 'Social Science' },
      { subjectID: '103', totalModules: 12, subjectName: 'General Knowledge' },
      { subjectID: '104', totalModules: 17, subjectName: 'Physics' },
      { subjectID: '105', totalModules: 5, subjectName: 'Chemestry' }];
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MastersubjectlistPage');
  }

}
