import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  admin: any;
  nama: String;

  constructor() { }

  setAdmin(admin){
    this.admin = admin;
  }

  setNama(nama){
    this.nama = nama;
  }

  getAdmin(){
    return [...this.admin];
  }

  getNama(){
    return this.nama;
  }
}
