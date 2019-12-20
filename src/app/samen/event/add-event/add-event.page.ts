import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
})
export class AddEventPage implements OnInit {

  event: any;
  id_event: String;
  nama_kegiatan: String;
  start_date: String;
  end_date: String;

  constructor(private eventService: EventService, private navCtrl: NavController) { }

  ngOnInit() {
  }

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

  onCloseEvent(){
    this.navCtrl.navigateBack('/samen/event');
  }

}
