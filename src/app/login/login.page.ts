import { Component, OnInit } from '@angular/core';
import { RondaService } from '../samen/ronda/ronda.service';
import { NavController, ToastController, ModalController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { AdminService } from '../admin.service';
import { RegisterPage } from '../register/register.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loggin: any;
  cemail: String;
  cpassword: String;
  email: String;
  nama: String;
  password: String;

  sukses: boolean = false;
  admin: any;

  constructor(
    private crudservice : RondaService, 
    private navCtrl: NavController, 
    private adminService: AdminService,
    private toastController: ToastController,
    private modalController: ModalController
    ) { }

  ngOnInit() {
  }

  async register() {
    const modal = await this.modalController.create({
      component: RegisterPage
    });
    return await modal.present();
  }


  async login(){
    this.crudservice.read_penduduk().subscribe(async data => {
      this.loggin = data.map(e => {
        return{
          email: e.payload.doc.data()['email'],
          nama: e.payload.doc.data()['nama'],
          admin: e.payload.doc.data()['admin'],
          password: e.payload.doc.data()['password']
        }
      })
      for(var i=0; i<this.loggin.length; i++){
        if(this.loggin[i].email == this.cemail  && this.loggin[i].password == this.cpassword){
          if(this.loggin[i].admin == "true"){
            this.admin = 'Y';
            console.log(this.loggin[i].nama);
            this.adminService.setNama(this.loggin[i].nama);
            this.adminService.setAdmin(this.admin);
            const toast = await this.toastController.create({
              message: 'Login as admin success.',
              duration: 2000
            });
            toast.present();
            this.navCtrl.navigateForward('/samen');
          }
          else if(this.loggin[i].admin == "false"){
            this.admin = 'N';
            this.adminService.setNama(this.loggin[i].nama);
            this.adminService.setAdmin(this.admin);
            console.log("penduduk");
            const toast = await this.toastController.create({
              message: 'Login as normal user success.',
              duration: 2000
            });
            toast.present();
            this.navCtrl.navigateForward('/samen');
          }
        }
      }
    })
  }

}
