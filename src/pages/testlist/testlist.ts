import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { TestList } from '../../interfaces/TestList';
import { QuestionPage } from '../question/question';
/**
 * Generated class for the TestlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testlist',
  templateUrl: 'testlist.html',
})
export class TestlistPage {

  testList: Array<TestList>;
  selectedSubject: string;
  totalTest: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.selectedSubject = navParams.data.selectedSubject.subjectName;
    this.totalTest = navParams.data.selectedSubject.totalTest;
    this.getTestListOfSelectedSubject(navParams.data.selectedSubject.subjectID);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestlistPage');
  }

  getTestListOfSelectedSubject(subjectID:string) {
    this.testList = [
      { testTD: '1001',author:'pritam kurunkar', name: 'Maths Test 1',rating:4, type: 'Speed Test', hours: 2, marks: 100, questionCount: 100 },
      { testTD: '1002',author:'pritam kurunkar', name: 'Maths Test 2',rating:3, type: 'Speed Test', hours: 1, marks: 50, questionCount: 50 },
      { testTD: '1003',author:'pritam kurunkar', name: 'Maths Test 3',rating:2, type: 'Speed Test', hours: 1, marks: 50, questionCount: 50 },
      { testTD: '1004',author:'pritam kurunkar', name: 'Maths Test 4',rating:1, type: 'Speed Test', hours: 1, marks: 50, questionCount: 50 },
      { testTD: '1005',author:'pritam kurunkar', name: 'Maths Test 5',rating:2, type: 'Speed Test', hours: 2, marks: 100, questionCount: 100 },
      { testTD: '1006',author:'pritam kurunkar', name: 'Maths Test 6',rating:5, type: 'Speed Test', hours: 2, marks: 100, questionCount: 100 },
      { testTD: '1007',author:'pritam kurunkar', name: 'Maths Test 7',rating:3, type: 'Speed Test', hours: 2, marks: 100, questionCount: 100 }];
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Do you want to start the test?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Start Test',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.push(QuestionPage);
          }
        }
      ]
    });
    confirm.present();
  }
}
