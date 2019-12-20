import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EventService } from 'src/app/samen/event/event.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss'],
})
export class UpdateEventComponent implements OnInit {

  event: any;
  id_event: String;
  nama_kegiatan: String;
  start_date: String;
  end_date: String;

  constructor(private modalCtrl: ModalController, private eventService: EventService) { }

  ngOnInit() {}

  updateEvent(cid_event, unama_kegiatan, ustart_date, uend_date){
    console.log(unama_kegiatan);
    this.eventService.read_event().subscribe(data => {
      this.event = data.map(e => {
        return{
          docid: e.payload.doc.id,
          id_event: e.payload.doc.data()['id_event']
        }
      })
      for(var i=0;i<this.event.length;i++){
        if(this.event[i].id_event==cid_event){
          let record = {};
          record['id_event'] = this.event[i].id_event;
          record['nama_kegiatan'] = unama_kegiatan;
          record['start_date'] = ustart_date;
          record['start_date'] = uend_date;
          this.eventService.update_event(this.event[i].docid, record);
          this.event[i].isEdit = false;
        }
      }
    })
    this.onCloseEvent();
  }

  async onCloseEvent(){
    await this.modalCtrl.dismiss();
  }
}
