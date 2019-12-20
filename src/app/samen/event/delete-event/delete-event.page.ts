import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.page.html',
  styleUrls: ['./delete-event.page.scss'],
})
export class DeleteEventPage implements OnInit {

  event: any;
  id_event: String;
  nama_kegiatan: String;
  start_date: String;
  end_date: String;

  constructor(private eventService: EventService, private navCtrl: NavController) { }

  ngOnInit() {
  }

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
          this.onCloseEvent();
        }
      }
    })
  }

  deleteEvent(nama_kegiatan){
    this.eventService.delete_event(nama_kegiatan);
    console.log("TEKAN!");
  }
  
  onCloseEvent(){
    this.navCtrl.navigateBack('/samen/event');
  }

}
