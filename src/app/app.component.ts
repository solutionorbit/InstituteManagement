import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SubjectlistPage } from '../pages/subjectlist/subjectlist';
import { MasterdataPage } from '../pages/masterdata/masterdata';
import { CreatetestPage } from '../pages/createtest/createtest';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;
  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: TabsPage },
      { title: 'Test', component: SubjectlistPage },
      { title: 'Master Data', component: MasterdataPage },
      { title: 'Create Test', component: CreatetestPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
