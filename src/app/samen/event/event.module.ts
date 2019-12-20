import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventPage } from './event.page';
import { NgCalendarModule } from 'ionic2-calendar';
import { AddEventComponent } from 'src/app/components/add-event/add-event.component';
import { DeleteEventComponent } from 'src/app/components/delete-event/delete-event.component';
import { UpdateEventComponent } from 'src/app/components/update-event/update-event.component';

const routes: Routes = [
  {
    path: '',
    component: EventPage
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
  declarations: [EventPage, AddEventComponent, UpdateEventComponent, DeleteEventComponent],
  entryComponents: [AddEventComponent, UpdateEventComponent, DeleteEventComponent]
})
export class EventPageModule {}
