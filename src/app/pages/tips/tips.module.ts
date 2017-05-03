import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule as AngularFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';


import { routing }       from './tips.routing';
import { Tips } from './tips.component';
import { allTips } from './components/all-tips/all-tips.component';
import { addTips } from './components/add-tips/add-tips.component';
import { AllTipsService } from './tips.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    AppTranslationModule,
    NgaModule,
    Ng2SmartTableModule,
    NgbRatingModule,
    NgbDropdownModule,
    NgbModalModule
  ],
  declarations: [
    Tips,
    addTips,
    allTips
  ],
  providers: [
    AllTipsService
  ]
})
export class TipsModule {
}
