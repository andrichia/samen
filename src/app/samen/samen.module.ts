import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SamenPage } from './samen.page';
import { ViewProfilComponent } from '../components/view-profil/view-profil.component';

const routes: Routes = [
  {
    path: '',
    component: SamenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SamenPage, ViewProfilComponent],
  entryComponents: [ViewProfilComponent]
})
export class SamenPageModule {}
