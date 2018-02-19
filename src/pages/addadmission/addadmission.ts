import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { Camera, CameraOptions } from '@ionic-native/camera';

import { AdmissionDetails } from '../../interfaces/AdmissionDetails';
/**
 * Generated class for the AddadmissionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addadmission',
  templateUrl: 'addadmission.html',
})
export class AddadmissionPage {

  base64Image: string;
  admission: AdmissionDetails = { admissiondate: new Date, course: "", centerOfChoice: "", firstname: "", middlename: "", lastname: "", gender: "", phone: "", email: "", address1: "", address2: "", city: "", state: "", zip: "", heardUsBy: "", message: "" };
  isNewAdmission: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private camera: Camera) {
    if (navParams.data.item) 
      this.admission = navParams.data.item;
      this.isNewAdmission = navParams.data.isNewAdmission;
  }

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }


  onAdmissionSubmit(form: NgForm) {
    if (form.valid) {

    }
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
      console.log('ionViewDidLoad AddadmissionPage');
    }

  }
