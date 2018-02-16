import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SubjetList } from '../../interfaces/SubjectList';
import { TestlistPage } from '../testlist/testlist';

/**
 * Generated class for the SubjectlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subjectlist',
  templateUrl: 'subjectlist.html',
})
export class SubjectlistPage {

  subjetList: Array<SubjetList>
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getSubjectList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubjectlistPage');
  }

  getSubjectList() {
    this.subjetList = [
      { subjectID: '101', totalTest: 50, subjectName: 'Mathematics' },
      { subjectID: '102', totalTest: 23, subjectName: 'Social Science' },
      { subjectID: '103', totalTest: 12, subjectName: 'General Knowledge' },
      { subjectID: '104', totalTest: 17, subjectName: 'Physics' },
      { subjectID: '105', totalTest: 5, subjectName: 'Chemestry' }];
  }

  selectSubject(subject: SubjetList) {

    this.navCtrl.push(TestlistPage, { selectedSubject: subject });
  }
}
