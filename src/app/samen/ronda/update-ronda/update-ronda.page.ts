import { Component, OnInit } from '@angular/core';
import { RondaService } from '../ronda.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-update-ronda',
  templateUrl: './update-ronda.page.html',
  styleUrls: ['./update-ronda.page.scss'],
})
export class UpdateRondaPage implements OnInit {

  ronda: any;
  idronda: String;
  nama: String;
  ronda_date: String;

  constructor(private rondaService: RondaService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  updateRonda(cidronda, unama, uronda_date){
    console.log(unama);
    this.rondaService.read_ronda().subscribe(data => {
      this.ronda = data.map(e => {
        return{
          docid: e.payload.doc.id,
          idronda: e.payload.doc.data()['idronda']
        }
      })
      for(var i=0;i<this.ronda.length;i++){
        if(this.ronda[i].idronda==cidronda){
            let record = {};
            record['idronda'] = this.ronda[i].idronda;
            record['nama'] = unama;
            record['ronda_date'] = uronda_date;
            this.rondaService.update_ronda(this.ronda[i].docid, record);
            this.onCloseRonda();
            this.ronda[i].isEdit = false;
        }
      }
    })
  }

  onCloseRonda(){
    this.navCtrl.navigateBack('/samen/ronda');
  }

}
