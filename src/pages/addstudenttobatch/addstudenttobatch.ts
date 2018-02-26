import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { BatchDetails } from '../../interfaces/BatchDetails';
import { AdmissionDetails } from '../../interfaces/AdmissionDetails';
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

  students: Array<AdmissionDetails> = new Array<AdmissionDetails>();
  selectedStudents: Array<AdmissionDetails> = new Array<AdmissionDetails>();
  batch: BatchDetails;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.batch = navParams.data.batch;
  }

  initializeItems() {
    this.students = [
      { admissiondate: new Date(), course: "", centerOfChoice: "Banaragatta", firstname: 'Genoa', middlename: "", lastname: "", gender: "Male", phone: "8095179000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      { admissiondate: new Date(), course: "", centerOfChoice: "Banaragatta", firstname: 'Glasglow', middlename: "", lastname: "", gender: "Female", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      { admissiondate: new Date(), course: "", centerOfChoice: "Banaragatta", firstname: 'Hanoi', middlename: "", lastname: "", gender: "Female", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      { admissiondate: new Date(), course: "", centerOfChoice: "Banaragatta", firstname: 'Hong Kong', middlename: "", lastname: "", gender: "Female", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      { admissiondate: new Date(), course: "", centerOfChoice: "Banaragatta", firstname: 'Islamabad', middlename: "", lastname: "", gender: "Female", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      { admissiondate: new Date(), course: "", centerOfChoice: "Banaragatta", firstname: 'Istanbul', middlename: "", lastname: "", gender: "Female", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      { admissiondate: new Date(), course: "", centerOfChoice: "Banaragatta", firstname: 'Jakarta', middlename: "", lastname: "", gender: "Female", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      { admissiondate: new Date(), course: "", centerOfChoice: "Banaragatta", firstname: 'Kiel', middlename: "", lastname: "", gender: "Female", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      { admissiondate: new Date(), course: "", centerOfChoice: "Banaragatta", firstname: 'Kyoto', middlename: "", lastname: "", gender: "Female", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      { admissiondate: new Date(), course: "", centerOfChoice: "Banaragatta", firstname: 'Le Havre', middlename: "", lastname: "", gender: "Female", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      { admissiondate: new Date(), course: "", centerOfChoice: "Banaragatta", firstname: 'Lebanon', middlename: "", lastname: "", gender: "Female", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      { admissiondate: new Date(), course: "", centerOfChoice: "Banaragatta", firstname: 'Lhasa', middlename: "", lastname: "", gender: "Male", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      { admissiondate: new Date(), course: "", centerOfChoice: "Banaragatta", firstname: 'Lima', middlename: "", lastname: "", gender: "Male", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      { admissiondate: new Date(), course: "", centerOfChoice: "Banaragatta", firstname: 'London', middlename: "", lastname: "", gender: "Male", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      { admissiondate: new Date(), course: "", centerOfChoice: "Banaragatta", firstname: 'Los Angeles', middlename: "", lastname: "", gender: "Male", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      { admissiondate: new Date(), course: "", centerOfChoice: "Banaragatta", firstname: 'Madrid', middlename: "", lastname: "", gender: "Male", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      { admissiondate: new Date(), course: "", centerOfChoice: "Banaragatta", firstname: 'Manila', middlename: "", lastname: "", gender: "Male", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      { admissiondate: new Date(), course: "", centerOfChoice: "Banaragatta", firstname: 'New York', middlename: "", lastname: "", gender: "Male", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      { admissiondate: new Date(), course: "", centerOfChoice: "Banaragatta", firstname: 'Olympia', middlename: "", lastname: "Aires", gender: "Male", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      { admissiondate: new Date(), course: "", centerOfChoice: "Banaragatta", firstname: 'Oslo', middlename: "", lastname: "", gender: "Male", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" },
      { admissiondate: new Date(), course: "", centerOfChoice: "Banaragatta", firstname: 'Panama City', middlename: "", lastname: "", gender: "Male", phone: "8095178000", email: "", address1: "BTM 1st stage", address2: "", city: "Banglore", state: "Karnataka", zip: "590069", heardUsBy: "Internet", message: "" }

    ];
  }

  selectStudent(student: AdmissionDetails) {
    this.selectedStudents.unshift(student);
  }

  removeSelectedStudent(student: AdmissionDetails) {
    var index = this.selectedStudents.indexOf(student, 0);
    if (index > -1) {
      this.selectedStudents.splice(index, 1);
    }
  }


  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.students = this.students.filter((item) => {
        return (item.firstname.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  

  ionViewDidLoad() {
    this.initializeItems();
    console.log('ionViewDidLoad AddstudenttobatchPage');
  }

}
