import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LaporService } from './lapor.service';
import { CameraResultType, Capacitor, CameraSource } from '@capacitor/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddLaporComponent } from './add-lapor/add-lapor.component';
import { UpdateEventComponent } from 'src/app/components/update-event/update-event.component';
import { DeleteEventComponent } from 'src/app/components/delete-event/delete-event.component';
import * as firebase from 'firebase';


@Component({
  selector: 'app-lapor',
  templateUrl: './lapor.page.html',
  styleUrls: ['./lapor.page.scss'],
})
export class LaporPage implements OnInit {
  lapor_img: string;
  keterangan: string;
  lapor_date: string;
  id_lapor: string;
  nama_lapor: string;
  lapor: any;
  laporAdd: LaporPage;
  constructor(
    private navCtrl: NavController,
    private router: Router,
    private modalCtrl: ModalController,
    private crudService: LaporService
    ) { }
  addLapor(){
    this.modalCtrl.create({ component: AddLaporComponent })
    .then(modalElement => {
      modalElement.present();
    })
  }


  onPickImage(){
    if(!Capacitor.isPluginAvailable('Camera')){
      return;
    }
  }
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


  ngOnInit() {
    this.crudService.read_pickImg().subscribe(data=>{
      this.lapor= data.map(e => {
        return{
          lapor_img: e.payload.doc.data()['lapor_img'],
          keterangan: e.payload.doc.data()['keterangan'],
          lapor_date: e.payload.doc.data()['lapor_date'], 
          //id_lapor: e.payload.doc.data()['Id'],
          nama_lapor: e.payload.doc.data()['nama_lapor'],
        };
      })
      console.log(this.lapor_img);
    })

  }
  
  DeleteRecord(rowID){
    this.crudService.delete_pickImg(rowID);
    
  }
  UpdateRecord(recordRow){
    let record = {};
    record['Image'] = recordRow.EditImg;
    record['Description'] = recordRow.EditDesc;
    record['Date'] = recordRow.EditDate;
    //record['Id'] = recordRow.EditId;
    record['Name'] = recordRow.EditName;
    this.crudService.update_pickImg(recordRow.id,record);
    recordRow.isEdit = false;
  }
  goBack(){
    this.navCtrl.navigateBack('/samen')
  }
}
