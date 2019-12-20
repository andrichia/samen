import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EventService } from 'src/app/samen/event/event.service';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.scss'],
})
export class DeleteEventComponent implements OnInit {

  event: any;
  id_event: String;
  nama_kegiatan: String;
  start_date: String;
  end_date: String;

  constructor(private modalCtrl: ModalController, private eventService: EventService) { }

  ngOnInit() {}

  cekEvent(cnama_kegiatan){
    this.eventService.read_event().subscribe(data => {
      this.event = data.map(e => {
        return{
          docid: e.payload.doc.id,
          id_event: e.payload.doc.data()['id_event'],
          nama_kegiatan: e.payload.doc.data()['nama_kegiatan'],
          start_date: e.payload.doc.data()['start_date'],
          end_date: e.payload.doc.data()['end_date']
        }
      })
      for(var i=0;i<this.event.length;i++){
        if(this.event[i].nama_kegiatan==cnama_kegiatan){
          this.deleteEvent(this.event[i].docid);
        }
      }
    })
    this.onCloseEvent();
  }

  deleteEvent(nama_kegiatan){
    this.eventService.delete_event(nama_kegiatan);
    console.log("TEKAN!");
  }

  async onCloseEvent(){
    await this.modalCtrl.dismiss();
  }

}
