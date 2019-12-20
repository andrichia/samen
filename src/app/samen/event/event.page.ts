import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { EventService } from './event.service';
import { AdminService } from 'src/app/admin.service';
import { AddEventComponent } from 'src/app/components/add-event/add-event.component';
import { DeleteEventComponent } from 'src/app/components/delete-event/delete-event.component';
import { UpdateEventComponent } from 'src/app/components/update-event/update-event.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  admin: any;
  event: any;
  id_event: String;
  nama_kegiatan: String;
  start_date: String;
  end_date: String;
  viewTitle;


  @ViewChild(CalendarComponent, {static: true}) myCalendar: CalendarComponent;

  eventSource = [];

  createEvents(){
    for(var i=0;i<this.event.length;i++){
      let events = {
        title:this.event[i].id_event + " - " + this.event[i].nama_kegiatan,
        startTime: new Date(this.event[i].start_date),
        endTime: new Date(this.event[i].end_date),
        allDay: false
      };
      this.eventSource.push(events);
      this.myCalendar.loadEvents();
    }
  }

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  }

  onTimeSelected = (ev: { selectedTime: Date, events: any[] }) => {};

  onViewTitleChanged(title){
    this.viewTitle = title;
  }

  constructor(
    private navCtrl: NavController,
    private eventService: EventService,
    private adminService: AdminService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.admin = this.adminService.getAdmin();
    if(this.admin == "N"){
      document.getElementById("wew").style.visibility = "hidden";
      document.getElementById("waw").style.visibility = "hidden";
      document.getElementById("wow").style.visibility = "hidden";
    }
  }

  ionViewWillEnter(){
    this.eventService.read_event().subscribe(data => {
      this.event = data.map(e => {
        return{
          id_event: e.payload.doc.data()['id_event'],
          nama_kegiatan: e.payload.doc.data()['nama_kegiatan'],
          start_date: e.payload.doc.data()['start_date'],
          end_date: e.payload.doc.data()['end_date']
        }
      })
      this.createEvents();
    })

    this.admin = this.adminService.getAdmin();
    if(this.admin == "N"){
      document.getElementById("wew").style.visibility = "hidden";
      document.getElementById("waw").style.visibility = "hidden";
      document.getElementById("wow").style.visibility = "hidden";
    }
  }
  
  // async onAddEvent(){
  //   const modal = await this.modalCtrl.create({
  //     component: AddEventComponent
  //   });
  //   return await modal.present();
  // }

  // async onUpdateEvent(){
  //   const modal = await this.modalCtrl.create({
  //     component: UpdateEventComponent
  //   });
  //   return await modal.present();
  // }

  // async onDeleteEvent(){
  //   const modal = await this.modalCtrl.create({
  //     component: DeleteEventComponent
  //   });
  //   return await modal.present();
  // }

  // addEvent(){
  //   var record = {};
  //   record['id_event'] = this.id_event;
  //   record['nama_kegiatan'] = this.nama_kegiatan;
  //   record['event_date'] = this.event_date;
  //   this.eventService.create_event(record).then(resp => {
  //     this.id_event = "";
  //     this.nama_kegiatan = "";
  //     this.event_date = "";
  //   }).catch(err => {
  //     console.log(err);
  //   });
  // }

  // updateEvent(cid_event, unama_kegiatan, uevent_date){
  //   console.log(unama_kegiatan);
  //   this.eventService.read_event().subscribe(data => {
  //     this.event = data.map(e => {
  //       return{
  //         docid: e.payload.doc.id,
  //         id_event: e.payload.doc.data()['id_event']
  //       }
  //     })
  //     for(var i=0;i<this.event.length;i++){
  //       if(this.event[i].id_event==cid_event){
  //         let record = {};
  //         record['id_event'] = this.event[i].id_event;
  //         record['nama_kegiatan'] = unama_kegiatan;
  //         record['event_date'] = uevent_date;
  //         this.eventService.update_event(this.event[i].docid, record);
  //         this.event[i].isEdit = false;
  //       }
  //     }
  //   })
  // }

  // cekEvent(cnama_kegiatan){
  //   this.eventService.read_event().subscribe(data => {
  //     this.event = data.map(e => {
  //       return{
  //         docid: e.payload.doc.id,
  //         id_event: e.payload.doc.data()['id_event'],
  //         nama_kegiatan: e.payload.doc.data()['nama_kegiatan'],
  //         event_date: e.payload.doc.data()['event_date']
  //       }
  //     })
  //     for(var i=0;i<this.event.length;i++){
  //       if(this.event[i].nama_kegiatan==cnama_kegiatan){
  //         this.deleteEvent(this.event[i].docid);
  //       }
  //     }
  //   })
  //   console.log(cnama_kegiatan);
  // }

  // deleteEvent(nama_kegiatan){
  //   this.eventService.delete_event(nama_kegiatan);
  //   console.log("TEKAN!");
  // }

  onAddEvent(){
    this.navCtrl.navigateBack('/samen/event/add-event');
  }
  
  onUpdateEvent(){
    this.navCtrl.navigateBack('/samen/event/update-event');
  }
  
  onDeleteEvent(){
    this.navCtrl.navigateBack('/samen/event/delete-event');
  }

  goBack(){
    this.navCtrl.navigateBack('/samen');
  }
}
