import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RondaService } from 'src/app/samen/ronda/ronda.service';

@Component({
  selector: 'app-update-ronda',
  templateUrl: './update-ronda.component.html',
  styleUrls: ['./update-ronda.component.scss'],
})
export class UpdateRondaComponent implements OnInit {

  ronda: any;
  idronda: String;
  nama: String;
  ronda_date: String;

  constructor(private modalCtrl: ModalController, private rondaService: RondaService) { }

  ngOnInit() {}

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
            this.ronda[i].isEdit = false;
        }
      }
    })
    this.onCloseRonda();
  }

  async onCloseRonda(){
    await this.modalCtrl.dismiss();
  }

}
