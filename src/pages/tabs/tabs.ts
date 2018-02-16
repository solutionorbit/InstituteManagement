import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { EnquiryPage } from '../enquiry/enquiry';
import { AdmissionPage } from '../admission/admission';
import { BatchPage } from '../batch/batch';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EnquiryPage;
  tab3Root = AdmissionPage;
  tab4Root = BatchPage;

  constructor() {

  }
}
