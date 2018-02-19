import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MastersubjectlistPage } from './mastersubjectlist';

@NgModule({
  declarations: [
    MastersubjectlistPage,
  ],
  imports: [
    IonicPageModule.forChild(MastersubjectlistPage),
  ],
})
export class MastersubjectlistPageModule {}
