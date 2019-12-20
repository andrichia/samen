import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { RondaService } from '../samen/ronda/ronda.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  admin:any;
  nama:any;
  email:any;
  ktp:any;
  password:any;

  constructor(private modalController : ModalController, private rondaService: RondaService, private toastController: ToastController) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  async register(){
    var record = {};
    record['ktp'] = this.ktp;
    record['admin'] = "false";
    record['email'] = this.email;
    record['nama'] = this.nama;
    record['password'] = this.password;
    this.rondaService.create_penduduk(record).then(resp => {
      this.admin = "";
      this.email = "";
      this.nama = "";
      this.password = "";
    }).catch(err => {
      console.log(err);
    });
    const toast = await this.toastController.create({
      message: 'Register success.',
      duration: 2000
    });
    toast.present();
    
    await this.modalController.dismiss();
  }



}
