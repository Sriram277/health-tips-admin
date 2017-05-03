import { Routes, RouterModule }  from '@angular/router';

import { Tips } from './tips.component';
import { allTips } from './components/all-tips/all-tips.component';
import { addTips } from './components/add-tips/add-tips.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tips,
    children: [
      { path: 'all-tips', component: allTips },
      { path: 'add-tips', component: addTips }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
