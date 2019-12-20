import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-profil',
  templateUrl: './view-profil.component.html',
  styleUrls: ['./view-profil.component.scss'],
})
export class ViewProfilComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async onCloseProfil(){
    await this.modalCtrl.dismiss();
  }

}
