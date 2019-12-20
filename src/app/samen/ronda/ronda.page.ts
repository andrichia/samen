import { Component, OnInit, ViewChild } from '@angular/core';
import {CalendarComponent} from "ionic2-calendar/calendar";
import { NavController, ModalController } from '@ionic/angular';
import { RondaService } from './ronda.service';
import { AdminService } from 'src/app/admin.service';
import { AddRondaComponent } from 'src/app/components/add-ronda/add-ronda.component';
import { UpdateRondaComponent } from 'src/app/components/update-ronda/update-ronda.component';
import { DeleteRondaComponent } from 'src/app/components/delete-ronda/delete-ronda.component';

@Component({
  selector: 'app-ronda',
  templateUrl: './ronda.page.html',
  styleUrls: ['./ronda.page.scss'],
})
export class RondaPage implements OnInit {

  admin: any;
  ronda: any;
  idronda: String;
  nama: String;
  ronda_date: String;
  viewTitle;
  
  @ViewChild(CalendarComponent, {static: true}) myCalendar: CalendarComponent;

  eventSource = [];

  createEvents(){
    // console.log(this.ronda.length);
    for(var i=0;i<this.ronda.length;i++){
    let events = {
      title: this.ronda[i].idronda + " - " + this.ronda[i].nama,
      startTime: new Date(this.ronda[i].ronda_date),
      endTime: new Date(this.ronda[i].ronda_date),
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

  onTimeSelected = (ev: { selectedTime: Date, events: any[] }) => {
  };

  onViewTitleChanged(title) {
    this.viewTitle = title;
}

  constructor(
    private rondaService: RondaService, 
    private navCtrl: NavController, 
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
    this.rondaService.read_ronda().subscribe(data => {
      this.ronda = data.map(e => {
        return{
          idronda: e.payload.doc.data()['idronda'],
          nama: e.payload.doc.data()['nama'],
          ronda_date: e.payload.doc.data()['ronda_date']
        }
      })
    this.createEvents();
    })

    this.admin = this.adminService.getAdmin();
    if(this.admin == "N"){
      document.getElementById("wew").style.visibility = "hidden";
      document.getElementById("waw").style.visibility = "hidden";
    }
  }

  // async onAddRonda(){
  //   const modal = await this.modalCtrl.create({
  //     component: AddRondaComponent
  //   });
  //   return await modal.present();
  // }

  // async onUpdateRonda(){
  //   const modal = await this.modalCtrl.create({
  //     component: UpdateRondaComponent
  //   });
  //   return await modal.present();
  // }

  // async onDeleteRonda(){
  //   const modal = await this.modalCtrl.create({
  //     component: DeleteRondaComponent
  //   });
  //   return await modal.present();
  // }

  // addRonda(){
  //   var record = {};
  //   record['idronda'] = this.idronda;
  //   record['nama'] = this.nama;
  //   record['ronda_date'] = this.ronda_date;
  //   this.rondaService.create_ronda(record).then(resp => {
  //     this.idronda = "";
  //     this.nama = "";
  //     this.ronda_date = "";
  //   }).catch(err => {
  //     console.log(err);
  //   });
  // }

  // updateRonda(cidronda, unama, uronda_date){
  //   console.log(unama);
  //   this.rondaService.read_ronda().subscribe(data => {
  //   this.ronda = data.map(e => {
  //     return{
  //       docid: e.payload.doc.id,
  //       idronda: e.payload.doc.data()['idronda']
  //     }
  //   })
  //   for(var i=0;i<this.ronda.length;i++){
  //     if(this.ronda[i].idronda==cidronda){
  //         let record = {};
  //         record['idronda'] = this.ronda[i].idronda;
  //         record['nama'] = unama;
  //         record['ronda_date'] = uronda_date;
  //         this.rondaService.update_ronda(this.ronda[i].docid, record);
  //         this.ronda[i].isEdit = false;
  //     }
  //   }
  // })
  // }

  // cekRonda(cnama){
  //   this.rondaService.read_ronda().subscribe(data => {
  //     this.ronda = data.map(e => {
  //       return{
  //         docid: e.payload.doc.id,
  //         idronda: e.payload.doc.data()['idronda'],
  //         nama: e.payload.doc.data()['nama'],
  //         ronda_date: e.payload.doc.data()['ronda_date']
  //       }
  //     })
  //     for(var i=0;i<this.ronda.length;i++){
  //       if(this.ronda[i].nama==cnama){
  //         this.deleteRonda(this.ronda[i].docid);
  //       }
  //     }
  //   })
  // }

  // deleteRonda(rowid){
  //   this.rondaService.delete_ronda(rowid);
  //   console.log("tekan");
  // }

  onAddRonda(){
    this.navCtrl.navigateBack('/samen/ronda/add-ronda');
  }
  
  onUpdateRonda(){
    this.navCtrl.navigateBack('/samen/ronda/update-ronda');
  }
  
  onDeleteRonda(){
    this.navCtrl.navigateBack('/samen/ronda/delete-ronda');
  }

  goBack(){
    this.navCtrl.navigateBack('/samen')
  }
}
