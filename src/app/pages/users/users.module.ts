import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { InlineForm } from './components/inlineForm';
import { BlockForm } from './components/blockForm';
import { HorizontalForm } from './components/horizontalForm';
import { BasicForm } from './components/basicForm';
import { WithoutLabelsForm } from './components/withoutLabelsForm';

import { routing }       from './users.routing';
import { Users } from './users.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule
  ],
  declarations: [
    Users,
    InlineForm,
    BlockForm,
    HorizontalForm,
    BasicForm,
    WithoutLabelsForm
  ],
  providers: [
  ]
})
export class UsersModule {
}
