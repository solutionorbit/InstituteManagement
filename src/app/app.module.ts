import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { AdmissionPage } from '../pages/admission/admission';
import { BatchPage } from '../pages/batch/batch';
import { EnquiryPage } from '../pages/enquiry/enquiry';
import { AddenquiryPage } from '../pages/addenquiry/addenquiry';
import { ViewenquirydetailsPage } from '../pages/viewenquirydetails/viewenquirydetails';
import { SubjectlistPage } from '../pages/subjectlist/subjectlist';
import { TestlistPage } from '../pages/testlist/testlist';
import { QuestionPage } from '../pages/question/question';
import { QuestionindexPage } from '../pages/questionindex/questionindex';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CallNumber } from '@ionic-native/call-number';

import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdmissionPage,
    BatchPage,
    EnquiryPage,
    TabsPage,
    AddenquiryPage,
    ViewenquirydetailsPage,
    SubjectlistPage,
    TestlistPage,
    QuestionPage,
    QuestionindexPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdmissionPage,
    BatchPage,
    EnquiryPage,
    TabsPage,
    AddenquiryPage,
    ViewenquirydetailsPage,
    SubjectlistPage,
    TestlistPage,
    QuestionPage,
    QuestionindexPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
