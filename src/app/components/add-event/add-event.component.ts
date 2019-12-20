import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EventService } from 'src/app/samen/event/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {

  event: any;
  id_event: String;
  nama_kegiatan: String;
  start_date: String;
  end_date: String;

  constructor(private modalCtrl: ModalController, private eventService: EventService) { }

  ngOnInit() {}

  addEvent(){
    var record = {};
    record['id_event'] = this.id_event;
    record['nama_kegiatan'] = this.nama_kegiatan;
    record['start_date'] = this.start_date;
    record['end_date'] = this.end_date;
    this.eventService.create_event(record).then(resp => {
      this.id_event = "";
      this.nama_kegiatan = "";
      this.start_date = "";
      this.end_date = "";
    }).catch(err => {
      console.log(err);
    });
    this.onCloseEvent();
  }

  async onCloseEvent(){
    await this.modalCtrl.dismiss();
  }

}
