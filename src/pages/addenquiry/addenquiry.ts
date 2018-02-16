import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

import { EnquiryDetails } from '../../interfaces/EnquiryDetails';

/**
 * Generated class for the AddenquiryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addenquiry',
  templateUrl: 'addenquiry.html',
})
export class AddenquiryPage {

  base64Image: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private camera: Camera) {
    if (navParams.data.item)
      this.enquiry = navParams.data.item;
    this.isNewEnquiry = navParams.data.isNewEnquiry;
  }

   options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  enquiry: EnquiryDetails = { enquirydate: new Date, course: "", centerOfChoice: "", firstname: "", middlename: "", lastname: "", gender: "", phone: "", email: "", address1: "", address2: "", city: "", state: "", zip: "", heardUsBy: "", message: "" };
  isNewEnquiry: boolean = true;


  onEnquirySubmit(form: NgForm) {
    if (form.valid) {

    }
  }

  goToEnquiryList() {
    this.navCtrl.pop()
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


 
  clickPicture() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddenquiryPage');
  }

}

