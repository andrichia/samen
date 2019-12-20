import { Component, OnInit } from '@angular/core';
import { RondaService } from 'src/app/samen/ronda/ronda.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-ronda',
  templateUrl: './add-ronda.component.html',
  styleUrls: ['./add-ronda.component.scss'],
})
export class AddRondaComponent implements OnInit {

  ronda: any;
  idronda: String;
  nama: String;
  ronda_date: String;

  constructor(private modalCtrl: ModalController, private rondaService: RondaService) { }

  ngOnInit() {}

  addRonda(){
    var record = {};
    record['idronda'] = this.idronda;
    record['nama'] = this.nama;
    record['ronda_date'] = this.ronda_date;
    this.rondaService.create_ronda(record).then(resp => {
      this.idronda = "";
      this.nama = "";
      this.ronda_date = "";
    }).catch(err => {
      console.log(err);
    });
    this.onCloseRonda();
  }

  async onCloseRonda(){
    await this.modalCtrl.dismiss();
  }

}
