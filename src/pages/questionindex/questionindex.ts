import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { QuestionDetails } from '../../interfaces/QuestionDetails';

/**
 * Generated class for the QuestionindexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questionindex',
  templateUrl: 'questionindex.html',
})
export class QuestionindexPage {
  questionList: Array<QuestionDetails>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.questionList = navParams.data.questionList;
  }


  dismiss(que: QuestionDetails) {
    this.viewCtrl.dismiss(que);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionindexPage');
  }

}
