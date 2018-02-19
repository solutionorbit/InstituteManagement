import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MasterModuleList } from '../../interfaces/MasterModuleList';

/**
 * Generated class for the MastermodulelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mastermodulelist',
  templateUrl: 'mastermodulelist.html',
})
export class MastermodulelistPage {

  moduleList: Array<MasterModuleList>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getModuleList();
  }

  getModuleList() {
    this.moduleList = [
      { moduleID: '101', totalQuestionaries: 50, moduleName: 'Module 1' },
      { moduleID: '102', totalQuestionaries: 23, moduleName: 'Module 2' },
      { moduleID: '103', totalQuestionaries: 12, moduleName: 'Module 3' },
      { moduleID: '104', totalQuestionaries: 17, moduleName: 'Module 4' },
      { moduleID: '105', totalQuestionaries: 5, moduleName: 'Module 5' }];
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad MastermodulelistPage');
  }

}
