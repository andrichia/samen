import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RondaPage } from './ronda.page';
import { NgCalendarModule } from 'ionic2-calendar';
import { DeleteRondaComponent } from 'src/app/components/delete-ronda/delete-ronda.component';
import { UpdateRondaComponent } from 'src/app/components/update-ronda/update-ronda.component';
import { AddRondaComponent } from 'src/app/components/add-ronda/add-ronda.component';

const routes: Routes = [
  {
    path: '',
    component: RondaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgCalendarModule
  ],
  declarations: [RondaPage, AddRondaComponent, UpdateRondaComponent, DeleteRondaComponent],
  entryComponents: [AddRondaComponent, UpdateRondaComponent, DeleteRondaComponent]
})
export class RondaPageModule {}
