import { Component, OnInit } from '@angular/core';
import { LaporService } from '../lapor.service';
import { Capacitor } from '@capacitor/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-lapor',
  templateUrl: './add-lapor.component.html',
  styleUrls: ['./add-lapor.component.scss'],
})
export class AddLaporComponent implements OnInit {
  lapor_img: string;
  keterangan: string;
  lapor_date: string;
  id_lapor: string;
  nama_lapor: string;
  lapor: any;
  constructor(
    private modalCtrl: ModalController,
    private crudService: LaporService
  ) { }

  ngOnInit() {}
  onFileChosen(evt: Event){
    console.log(evt);
    const pickedFile = (evt.target as HTMLInputElement).files[0];
    const fr = new FileReader();
    fr.onload = () => {
      const dataUrl = fr.result.toString();
      this.lapor_img = dataUrl;
    }
    fr.readAsDataURL(pickedFile);
  }
  onPickImage(){
    if(!Capacitor.isPluginAvailable('Camera')){
      return;
    }
  }
  CreateRecord(){
    let record ={};
    record['lapor_img'] = this.lapor_img;
    record['keterangan'] = this.keterangan;
    record['lapor_date'] = this.lapor_date;
    //record['id_lapor'] = this.id_lapor;
    record['nama_lapor'] = this.nama_lapor;
    this.crudService.create_pickImg(record).then(resp => {
      this.lapor_img = "";
      this.keterangan = "";
      this.lapor_date = "" ;
      //this.id_lapor = "";
      this.nama_lapor = "";
      console.log(resp);
    })
    .catch(error => {
      console.log(error);
    });
    this.onCloseEvent();
  }
  async onCloseEvent(){
    await this.modalCtrl.dismiss();
  }
}
