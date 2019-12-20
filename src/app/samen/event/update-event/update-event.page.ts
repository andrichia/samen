import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.page.html',
  styleUrls: ['./update-event.page.scss'],
})
export class UpdateEventPage implements OnInit {

  event: any;
  id_event: String;
  nama_kegiatan: String;
  start_date: String;
  end_date: String;


  constructor(private eventService: EventService, private navCtrl: NavController) { }

  ngOnInit() {
  }

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
        // console.log("wew : " + cid_event + "  waw :" + this.event[i].id_event);
        if(this.event[i].id_event==cid_event){
          let record = {};
          record['id_event'] = this.event[i].id_event;
          record['nama_kegiatan'] = unama_kegiatan;
          record['start_date'] = ustart_date;
          record['end_date'] = uend_date;
          this.eventService.update_event(this.event[i].docid, record);
          this.onCloseEvent();
          this.event[i].isEdit = false;
        }
      }
    })
  }

  onCloseEvent(){
    this.navCtrl.navigateBack('/samen/event');
  }

}
