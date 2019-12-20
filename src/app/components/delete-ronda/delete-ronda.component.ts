import { Component, OnInit } from '@angular/core';
import { RondaService } from 'src/app/samen/ronda/ronda.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-delete-ronda',
  templateUrl: './delete-ronda.component.html',
  styleUrls: ['./delete-ronda.component.scss'],
})
export class DeleteRondaComponent implements OnInit {

  ronda: any;
  idronda: String;
  nama: String;
  ronda_date: String;

  constructor(private modalCtrl: ModalController, private rondaService: RondaService) { }

  ngOnInit() {}

  cekRonda(cnama){
    this.rondaService.read_ronda().subscribe(data => {
      this.ronda = data.map(e => {
        return{
          docid: e.payload.doc.id,
          idronda: e.payload.doc.data()['idronda'],
          nama: e.payload.doc.data()['nama'],
          ronda_date: e.payload.doc.data()['ronda_date']
        }
      })
      for(var i=0;i<this.ronda.length;i++){
        if(this.ronda[i].nama==cnama){
          this.deleteRonda(this.ronda[i].docid);
        }
      }
    })
    this.onCloseRonda();
  }

  deleteRonda(nama){
    this.rondaService.delete_ronda(nama);
  }

  async onCloseRonda(){
    await this.modalCtrl.dismiss();
  }

}
