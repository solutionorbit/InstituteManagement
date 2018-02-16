import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';

import { QuestionindexPage } from '../questionindex/questionindex';
import { QuestionDetails } from '../../interfaces/QuestionDetails';

/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {

  time: string;
  questionList: Array<QuestionDetails>;
  selectedQuestion: QuestionDetails;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private toastCtrl: ToastController) {
    this.getQuestionOfSelectedTest();
    this.selectedQuestion = this.questionList[0];
    this.startTimer(10);
  }

  presentModal() {
    let modal = this.modalCtrl.create(QuestionindexPage, { questionList: this.questionList });
    modal.onDidDismiss((x) => {
      // This will be executed after the modal is dismissed...
      if (x)
        this.selectedQuestion = x;
    });
    modal.present();
  }


  startTimer(totalTime: number) {
    this.time = totalTime-- + ' min 00 sec';
    setTimeout(x => {
      let sec = 60;
      let refreshId = setInterval(y => {
        if (totalTime > 0) {
          if (sec > 0) {
            this.time = totalTime + ' min ' + --sec + ' sec';
          } else {
            sec = 60;
            totalTime--;
          }
        } else {
          clearInterval(refreshId);
        }
      }, 1000);
    }, 0);
  }


  getQuestionOfSelectedTest() {
    this.questionList = [
      {
        questionIndex: 1, questionID: "que001", testID: '101', marks: 1, setAsAnswered: false, setAsRead: false, questionStatement: 'The average of first 50 natural numbers is …………',
        options: [
          { questionID: 'que001', optionID: 'opt01', isSelected: false, text: '25.30', value: '25.30' },
          { questionID: 'que001', optionID: 'opt02', isSelected: false, text: '20.5', value: '20.5' },
          { questionID: 'que001', optionID: 'opt03', isSelected: false, text: '25.00', value: '25.00' },
          { questionID: 'que001', optionID: 'opt04', isSelected: false, text: '12.25', value: '12.25' }],
        answer: []
      },
      {
        questionIndex: 2, questionID: "que002", testID: '101', marks: 1, setAsAnswered: false, setAsRead: false, questionStatement: 'A fraction which bears the same ratio to 1/27 as 3/11 bear to 5/9 is equal to ………',
        options: [
          { questionID: 'que001', optionID: 'opt01', isSelected: false, text: '1/55', value: '1/55' },
          { questionID: 'que001', optionID: 'opt02', isSelected: false, text: '55', value: '55' },
          { questionID: 'que001', optionID: 'opt03', isSelected: false, text: '3/11', value: '3/11' },
          { questionID: 'que001', optionID: 'opt04', isSelected: false, text: '1/11', value: '1/11' }],
        answer: []
      },
      {
        questionIndex: 3, questionID: "que003", testID: '101', marks: 1, setAsAnswered: false, setAsRead: false, questionStatement: 'The number of 3-digit numbers divisible by 6, is …………',
        options: [
          { questionID: 'que001', optionID: 'opt01', isSelected: false, text: '149', value: '149' },
          { questionID: 'que001', optionID: 'opt02', isSelected: false, text: '166', value: '166' },
          { questionID: 'que001', optionID: 'opt03', isSelected: false, text: '150', value: '150' },
          { questionID: 'que001', optionID: 'opt04', isSelected: false, text: '151', value: '151' }],
        answer: []
      },
      {
        questionIndex: 4, questionID: "que001", testID: '101', marks: 1, setAsAnswered: false, setAsRead: false, questionStatement: 'The average of first 50 natural numbers is …………',
        options: [
          { questionID: 'que001', optionID: 'opt01', isSelected: false, text: '25.30', value: '25.30' },
          { questionID: 'que001', optionID: 'opt02', isSelected: false, text: '20.5', value: '20.5' },
          { questionID: 'que001', optionID: 'opt03', isSelected: false, text: '25.00', value: '25.00' },
          { questionID: 'que001', optionID: 'opt04', isSelected: false, text: '12.25', value: '12.25' }],
        answer: []
      },
      {
        questionIndex: 5, questionID: "que002", testID: '101', marks: 1, setAsAnswered: false, setAsRead: false, questionStatement: 'A fraction which bears the same ratio to 1/27 as 3/11 bear to 5/9 is equal to ………',
        options: [
          { questionID: 'que001', optionID: 'opt01', isSelected: false, text: '1/55', value: '1/55' },
          { questionID: 'que001', optionID: 'opt02', isSelected: false, text: '55', value: '55' },
          { questionID: 'que001', optionID: 'opt03', isSelected: false, text: '3/11', value: '3/11' },
          { questionID: 'que001', optionID: 'opt04', isSelected: false, text: '1/11', value: '1/11' }],
        answer: []
      },
      {
        questionIndex: 6, questionID: "que003", testID: '101', marks: 1, setAsAnswered: false, setAsRead: false, questionStatement: 'The number of 3-digit numbers divisible by 6, is …………',
        options: [
          { questionID: 'que001', optionID: 'opt01', isSelected: false, text: '149', value: '149' },
          { questionID: 'que001', optionID: 'opt02', isSelected: false, text: '166', value: '166' },
          { questionID: 'que001', optionID: 'opt03', isSelected: false, text: '150', value: '150' },
          { questionID: 'que001', optionID: 'opt04', isSelected: false, text: '151', value: '151' }],
        answer: []
      },
      {
        questionIndex: 7, questionID: "que001", testID: '101', marks: 1, setAsAnswered: false, setAsRead: false, questionStatement: 'The average of first 50 natural numbers is …………',
        options: [
          { questionID: 'que001', optionID: 'opt01', isSelected: false, text: '25.30', value: '25.30' },
          { questionID: 'que001', optionID: 'opt02', isSelected: false, text: '20.5', value: '20.5' },
          { questionID: 'que001', optionID: 'opt03', isSelected: false, text: '25.00', value: '25.00' },
          { questionID: 'que001', optionID: 'opt04', isSelected: false, text: '12.25', value: '12.25' }],
        answer: []
      },
      {
        questionIndex: 8, questionID: "que002", testID: '101', marks: 1, setAsAnswered: false, setAsRead: false, questionStatement: 'A fraction which bears the same ratio to 1/27 as 3/11 bear to 5/9 is equal to ………',
        options: [
          { questionID: 'que001', optionID: 'opt01', isSelected: false, text: '1/55', value: '1/55' },
          { questionID: 'que001', optionID: 'opt02', isSelected: false, text: '55', value: '55' },
          { questionID: 'que001', optionID: 'opt03', isSelected: false, text: '3/11', value: '3/11' },
          { questionID: 'que001', optionID: 'opt04', isSelected: false, text: '1/11', value: '1/11' }],
        answer: []
      },
      {
        questionIndex: 9, questionID: "que003", testID: '101', marks: 1, setAsAnswered: false, setAsRead: false, questionStatement: 'The number of 3-digit numbers divisible by 6, is …………',
        options: [
          { questionID: 'que001', optionID: 'opt01', isSelected: false, text: '149', value: '149' },
          { questionID: 'que001', optionID: 'opt02', isSelected: false, text: '166', value: '166' },
          { questionID: 'que001', optionID: 'opt03', isSelected: false, text: '150', value: '150' },
          { questionID: 'que001', optionID: 'opt04', isSelected: false, text: '151', value: '151' }],
        answer: []
      },
      {
        questionIndex: 10, questionID: "que001", testID: '101', marks: 1, setAsAnswered: false, setAsRead: false, questionStatement: 'The average of first 50 natural numbers is …………',
        options: [
          { questionID: 'que001', optionID: 'opt01', isSelected: false, text: '25.30', value: '25.30' },
          { questionID: 'que001', optionID: 'opt02', isSelected: false, text: '20.5', value: '20.5' },
          { questionID: 'que001', optionID: 'opt03', isSelected: false, text: '25.00', value: '25.00' },
          { questionID: 'que001', optionID: 'opt04', isSelected: false, text: '12.25', value: '12.25' }],
        answer: []
      },
      {
        questionIndex: 11, questionID: "que002", testID: '101', marks: 1, setAsAnswered: false, setAsRead: false, questionStatement: 'A fraction which bears the same ratio to 1/27 as 3/11 bear to 5/9 is equal to ………',
        options: [
          { questionID: 'que001', optionID: 'opt01', isSelected: false, text: '1/55', value: '1/55' },
          { questionID: 'que001', optionID: 'opt02', isSelected: false, text: '55', value: '55' },
          { questionID: 'que001', optionID: 'opt03', isSelected: false, text: '3/11', value: '3/11' },
          { questionID: 'que001', optionID: 'opt04', isSelected: false, text: '1/11', value: '1/11' }],
        answer: []
      },
      {
        questionIndex: 12, questionID: "que003", testID: '101', marks: 1, setAsAnswered: false, setAsRead: false, questionStatement: 'The number of 3-digit numbers divisible by 6, is …………',
        options: [
          { questionID: 'que001', optionID: 'opt01', isSelected: false, text: '149', value: '149' },
          { questionID: 'que001', optionID: 'opt02', isSelected: false, text: '166', value: '166' },
          { questionID: 'que001', optionID: 'opt03', isSelected: false, text: '150', value: '150' },
          { questionID: 'que001', optionID: 'opt04', isSelected: false, text: '151', value: '151' }],
        answer: []
      },
      {
        questionIndex: 13, questionID: "que001", testID: '101', marks: 1, setAsAnswered: false, setAsRead: false, questionStatement: 'The average of first 50 natural numbers is …………',
        options: [
          { questionID: 'que001', optionID: 'opt01', isSelected: false, text: '25.30', value: '25.30' },
          { questionID: 'que001', optionID: 'opt02', isSelected: false, text: '20.5', value: '20.5' },
          { questionID: 'que001', optionID: 'opt03', isSelected: false, text: '25.00', value: '25.00' },
          { questionID: 'que001', optionID: 'opt04', isSelected: false, text: '12.25', value: '12.25' }],
        answer: []
      },
      {
        questionIndex: 14, questionID: "que002", testID: '101', marks: 1, setAsAnswered: false, setAsRead: false, questionStatement: 'A fraction which bears the same ratio to 1/27 as 3/11 bear to 5/9 is equal to ………',
        options: [
          { questionID: 'que001', optionID: 'opt01', isSelected: false, text: '1/55', value: '1/55' },
          { questionID: 'que001', optionID: 'opt02', isSelected: false, text: '55', value: '55' },
          { questionID: 'que001', optionID: 'opt03', isSelected: false, text: '3/11', value: '3/11' },
          { questionID: 'que001', optionID: 'opt04', isSelected: false, text: '1/11', value: '1/11' }],
        answer: []
      },
      {
        questionIndex: 15, questionID: "que003", testID: '101', marks: 1, setAsAnswered: false, setAsRead: false, questionStatement: 'The number of 3-digit numbers divisible by 6, is …………',
        options: [
          { questionID: 'que001', optionID: 'opt01', isSelected: false, text: '149', value: '149' },
          { questionID: 'que001', optionID: 'opt02', isSelected: false, text: '166', value: '166' },
          { questionID: 'que001', optionID: 'opt03', isSelected: false, text: '150', value: '150' },
          { questionID: 'que001', optionID: 'opt04', isSelected: false, text: '151', value: '151' }],
        answer: []
      },
      {
        questionIndex: 16, questionID: "que001", testID: '101', marks: 1, setAsAnswered: false, setAsRead: false, questionStatement: 'The average of first 50 natural numbers is …………',
        options: [
          { questionID: 'que001', optionID: 'opt01', isSelected: false, text: '25.30', value: '25.30' },
          { questionID: 'que001', optionID: 'opt02', isSelected: false, text: '20.5', value: '20.5' },
          { questionID: 'que001', optionID: 'opt03', isSelected: false, text: '25.00', value: '25.00' },
          { questionID: 'que001', optionID: 'opt04', isSelected: false, text: '12.25', value: '12.25' }],
        answer: []
      },
      {
        questionIndex: 17, questionID: "que002", testID: '101', marks: 1, setAsAnswered: false, setAsRead: false, questionStatement: 'A fraction which bears the same ratio to 1/27 as 3/11 bear to 5/9 is equal to ………',
        options: [
          { questionID: 'que001', optionID: 'opt01', isSelected: false, text: '1/55', value: '1/55' },
          { questionID: 'que001', optionID: 'opt02', isSelected: false, text: '55', value: '55' },
          { questionID: 'que001', optionID: 'opt03', isSelected: false, text: '3/11', value: '3/11' },
          { questionID: 'que001', optionID: 'opt04', isSelected: false, text: '1/11', value: '1/11' }],
        answer: []
      },
      {
        questionIndex: 18, questionID: "que003", testID: '101', marks: 1, setAsAnswered: false, setAsRead: false, questionStatement: 'The number of 3-digit numbers divisible by 6, is …………',
        options: [
          { questionID: 'que001', optionID: 'opt01', isSelected: false, text: '149', value: '149' },
          { questionID: 'que001', optionID: 'opt02', isSelected: false, text: '166', value: '166' },
          { questionID: 'que001', optionID: 'opt03', isSelected: false, text: '150', value: '150' },
          { questionID: 'que001', optionID: 'opt04', isSelected: false, text: '151', value: '151' }],
        answer: []
      }];
  }



  selectNextQuestion(questionIndex: number) {
    this.selectedQuestion = this.questionList.find(x => x.questionIndex == questionIndex + 1);
  }

  selectPrevQuestion(questionIndex: number) {
    this.selectedQuestion = this.questionList.find(x => x.questionIndex == questionIndex - 1);
  }

  setQuestionAsMarked() {
    this.selectedQuestion.setAsRead = !this.selectedQuestion.setAsRead;
  }

  submitAnswer() {

    this.selectedQuestion.options.forEach((x) => {
      if (x.isSelected)
        this.selectedQuestion.answer.push(x);
    });
    if (this.selectedQuestion.answer.length == 0) {
      this.presentToast();
    }
    else {
      this.selectedQuestion.setAsAnswered = true;
      this.selectNextQuestion(this.selectedQuestion.questionIndex);
    }

  }


  swipeQuestion($event: any) {
    let direction = $event.direction;
    if (direction == 2) {
      this.selectNextQuestion(this.selectedQuestion.questionIndex);
    } else if (direction == 4) {
      this.selectPrevQuestion(this.selectedQuestion.questionIndex);
    }
  }


  presentToast() {
    console.log('toast');
    let toast = this.toastCtrl.create({
      message: 'Options are not selected.',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
    ionViewDidLoad() {
      console.log('ionViewDidLoad QuestionPage');
    }

  }
