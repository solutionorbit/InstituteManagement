import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { AddadmissionPage } from '../addadmission/addadmission';

import { EnquiryDetails } from '../../interfaces/EnquiryDetails';
import { AddenquiryPage } from '../addenquiry/addenquiry';
import { ViewenquirydetailsPage } from '../viewenquirydetails/viewenquirydetails';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the EnquiryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enquiry',
  templateUrl: 'enquiry.html',
})
export class EnquiryPage {
  items: Array<EnquiryDetails>;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private callNumber: CallNumber) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      {enquirydate:new Date() ,course: "", centerOfChoice: "Banaragatta", firstname: 'Genoa', middlename: "", lastname: "", gender: "Male", phone: "8095179000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      {enquirydate:new Date() ,course: "", centerOfChoice: "Banaragatta", firstname: 'Glasglow', middlename: "", lastname: "", gender: "Female", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      {enquirydate:new Date() ,course: "", centerOfChoice: "Banaragatta", firstname: 'Hanoi', middlename: "", lastname: "", gender: "Female", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      {enquirydate:new Date() ,course: "", centerOfChoice: "Banaragatta", firstname: 'Hong Kong', middlename: "", lastname: "", gender: "Female", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      {enquirydate:new Date() ,course: "", centerOfChoice: "Banaragatta", firstname: 'Islamabad', middlename: "", lastname: "", gender: "Female", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      {enquirydate:new Date() ,course: "", centerOfChoice: "Banaragatta", firstname: 'Istanbul', middlename: "", lastname: "", gender: "Female", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      {enquirydate:new Date() ,course: "", centerOfChoice: "Banaragatta", firstname: 'Jakarta', middlename: "", lastname: "", gender: "Female", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      {enquirydate:new Date() ,course: "", centerOfChoice: "Banaragatta", firstname: 'Kiel', middlename: "", lastname: "", gender: "Female", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      {enquirydate:new Date() ,course: "", centerOfChoice: "Banaragatta", firstname: 'Kyoto', middlename: "", lastname: "", gender: "Female", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      {enquirydate:new Date() ,course: "", centerOfChoice: "Banaragatta", firstname: 'Le Havre', middlename: "", lastname: "", gender: "Female", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      {enquirydate:new Date() ,course: "", centerOfChoice: "Banaragatta", firstname: 'Lebanon', middlename: "", lastname: "", gender: "Female", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      {enquirydate:new Date() ,course: "", centerOfChoice: "Banaragatta", firstname: 'Lhasa', middlename: "", lastname: "", gender: "Male", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      {enquirydate:new Date() ,course: "", centerOfChoice: "Banaragatta", firstname: 'Lima', middlename: "", lastname: "", gender: "Male", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      {enquirydate:new Date() ,course: "", centerOfChoice: "Banaragatta", firstname: 'London', middlename: "", lastname: "", gender: "Male", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      {enquirydate:new Date() ,course: "", centerOfChoice: "Banaragatta", firstname: 'Los Angeles', middlename: "", lastname: "", gender: "Male", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      {enquirydate:new Date() ,course: "", centerOfChoice: "Banaragatta", firstname: 'Madrid', middlename: "", lastname: "", gender: "Male", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      {enquirydate:new Date() ,course: "", centerOfChoice: "Banaragatta", firstname: 'Manila', middlename: "", lastname: "", gender: "Male", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      {enquirydate:new Date() ,course: "", centerOfChoice: "Banaragatta", firstname: 'New York', middlename: "", lastname: "", gender: "Male", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      {enquirydate:new Date() ,course: "", centerOfChoice: "Banaragatta", firstname: 'Olympia', middlename: "", lastname: "Aires", gender: "Male", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      {enquirydate:new Date() ,course: "", centerOfChoice: "Banaragatta", firstname: 'Oslo', middlename: "", lastname: "", gender: "Male", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      {enquirydate:new Date() , course: "", centerOfChoice: "Banaragatta", firstname: 'Panama City', middlename: "", lastname: "", gender: "Male", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" }
      
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.firstname.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  openAddEnquiryPage() {
    let modal = this.modalCtrl.create(AddenquiryPage, { isNewEnquiry: true });
    modal.present();
  }

  viewEnquiryDetails(item) {
    this.navCtrl.push(ViewenquirydetailsPage, { item: item });
  }


  admitStudent(item) {
    let modal = this.modalCtrl.create(AddadmissionPage, { item: item, isNewAdmission: true });
    modal.present();
  }

  callSelectedEnquiry(contactNumber) {
    this.callNumber.callNumber(contactNumber, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnquiryPage');
  }

 

}
