import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LaporPage } from './lapor.page';
import { AddLaporComponent } from './add-lapor/add-lapor.component';

const routes: Routes = [
  {
    path: '',
    component: LaporPage
  }
];

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule.forChild(routes)
    ],
    declarations: [
      LaporPage,
      AddLaporComponent
    ],
    entryComponents: [AddLaporComponent]
  
})
export class LaporPageModule {}
