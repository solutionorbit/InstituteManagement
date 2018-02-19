import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MasterQuestionaryList } from '../../interfaces/MasterQuestionaryList';

/**
 * Generated class for the MasterquestionarylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-masterquestionarylist',
  templateUrl: 'masterquestionarylist.html',
})
export class MasterquestionarylistPage {

  questionaryList: Array<MasterQuestionaryList>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getQuestionaryList();
  }


  getQuestionaryList() {
    this.questionaryList = [
      { questionaryID: '101', totalQuestions: 50, questionaryName: 'Questionary 1' },
      { questionaryID: '102', totalQuestions: 23, questionaryName: 'Questionary 2' },
      { questionaryID: '103', totalQuestions: 12, questionaryName: 'Questionary 3' },
      { questionaryID: '104', totalQuestions: 17, questionaryName: 'Questionary 4' },
      { questionaryID: '105', totalQuestions: 5, questionaryName: 'Questionary 5' }];
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MasterquestionarylistPage');
  }

}
