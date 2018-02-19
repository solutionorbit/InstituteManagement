import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasterquestionarylistPage } from './masterquestionarylist';

@NgModule({
  declarations: [
    MasterquestionarylistPage,
  ],
  imports: [
    IonicPageModule.forChild(MasterquestionarylistPage),
  ],
})
export class MasterquestionarylistPageModule {}
