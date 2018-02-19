import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MastermodulelistPage } from './mastermodulelist';

@NgModule({
  declarations: [
    MastermodulelistPage,
  ],
  imports: [
    IonicPageModule.forChild(MastermodulelistPage),
  ],
})
export class MastermodulelistPageModule {}
