import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeleteRondaPage } from './delete-ronda.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteRondaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeleteRondaPage]
})
export class DeleteRondaPageModule {}
