import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController, AlertController, NavController } from '@ionic/angular';
import { ViewProfilComponent } from '../components/view-profil/view-profil.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-samen',
  templateUrl: './samen.page.html',
  styleUrls: ['./samen.page.scss'],
})
export class SamenPage implements OnInit {
  admin: any;
  nama: any;

  constructor(
    private modalCtrl: ModalController, 
    private adminService: AdminService, 
    private route: Router, 
    private alertController: AlertController,
    private navController: NavController
    ) {  }

  ngOnInit() {
    this.admin = this.adminService.getAdmin();
    if(this.admin == "Y"){
      console.log("benar");
    }
    else if(this.admin == "N"){
      console.log("salah");
    }
    this.nama = this.adminService.getNama();
    console.log(this.nama);
  }


  async onViewProfil(){
    const modal = await this.modalCtrl.create({
      component: ViewProfilComponent
    });
    return await modal.present();
  }

  async alert() {
    const alert = await this.alertController.create({
      header: this.nama,
      message: 'Sure want to log out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.navController.navigateBack('/login');
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }


}
