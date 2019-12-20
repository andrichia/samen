import { Component, OnInit } from '@angular/core';
import { RondaService } from '../ronda.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-ronda',
  templateUrl: './add-ronda.page.html',
  styleUrls: ['./add-ronda.page.scss'],
})
export class AddRondaPage implements OnInit {

  ronda: any;
  idronda: String;
  nama: String;
  ronda_date: String;

  constructor(private rondaService: RondaService, private navCtrl: NavController) { }

  ngOnInit() {
  }

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

  onCloseRonda(){
    this.navCtrl.navigateBack('/samen/ronda');
  }

}
