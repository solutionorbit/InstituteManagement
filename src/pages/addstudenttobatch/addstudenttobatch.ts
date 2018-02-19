import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddstudenttobatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addstudenttobatch',
  templateUrl: 'addstudenttobatch.html',
})
export class AddstudenttobatchPage {

  avatars: Array<string>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.avatars = ['assets/imgs/person.jpg', 'assets/imgs/person.jpg', 'assets/imgs/person.jpg', 'assets/imgs/person.jpg', 'assets/imgs/person.jpg', 'assets/imgs/person.jpg', 'assets/imgs/person.jpg', 'assets/imgs/person.jpg', 'assets/imgs/person.jpg', 'assets/imgs/person.jpg', 'assets/imgs/person.jpg', 'assets/imgs/person.jpg', 'assets/imgs/person.jpg'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddstudenttobatchPage');
  }

}
