import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubjectlistPage } from './subjectlist';

@NgModule({
  declarations: [
    SubjectlistPage,
  ],
  imports: [
    IonicPageModule.forChild(SubjectlistPage),
  ],
})
export class SubjectlistPageModule {}
