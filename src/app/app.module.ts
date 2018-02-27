import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
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
import { AddadmissionPage } from '../pages/addadmission/addadmission';
import { ViewadmissiondetailsPage } from '../pages/viewadmissiondetails/viewadmissiondetails';
import { MasterdataPage } from '../pages/masterdata/masterdata';
import { CreatetestPage } from '../pages/createtest/createtest';
import { MastersubjectlistPage } from '../pages/mastersubjectlist/mastersubjectlist';
import { MastermodulelistPage } from '../pages/mastermodulelist/mastermodulelist';
import { MasterquestionarylistPage } from '../pages/masterquestionarylist/masterquestionarylist';
import { CreatebatchPage } from '../pages/createbatch/createbatch';
import { AddstudenttobatchPage } from '../pages/addstudenttobatch/addstudenttobatch';
import { Pipefilter } from '../pages/pipefilter/pipefilter';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CallNumber } from '@ionic-native/call-number';

import { Camera } from '@ionic-native/camera';
import { TouchID } from '@ionic-native/touch-id';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
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
    QuestionindexPage,
    AddadmissionPage,
    ViewadmissiondetailsPage,
    MasterdataPage,
    CreatetestPage,
    MastersubjectlistPage,
    MastermodulelistPage,
    MasterquestionarylistPage,
    CreatebatchPage,
    AddstudenttobatchPage,
    Pipefilter
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
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
    QuestionindexPage,
    AddadmissionPage,
    ViewadmissiondetailsPage,
    MasterdataPage,
    CreatetestPage,
    MastersubjectlistPage,
    MastermodulelistPage,
    MasterquestionarylistPage,
    CreatebatchPage,
    AddstudenttobatchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    Camera,
    TouchID,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
