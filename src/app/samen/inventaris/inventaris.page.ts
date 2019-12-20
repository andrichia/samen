import { Component, OnInit } from '@angular/core';
 
import { CrudService } from './crud.service';
 
@Component({
  selector: 'app-home',
  templateUrl: 'inventaris.page.html',
  styleUrls: ['inventaris.page.scss'],
})
export class InventarisPage implements OnInit {
 
  Barang: any;
  NamaBarang: string;
  JumlahBarang: number;
  KeteranganBarang: string;
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit() {
    this.crudService.read_Barang().subscribe(data => {
 
      this.Barang = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Barang: e.payload.doc.data()['Barang'],
          Jumlah: e.payload.doc.data()['Jumlah'],
          Keterangan: e.payload.doc.data()['Keterangan'],
        };
      })
      console.log(this.Barang);
 
    });
  }
 
  CreateRecord() {
    let record = {};
    record['Barang'] = this.NamaBarang;
    record['Jumlah'] = this.JumlahBarang;
    record['Keterangan'] = this.KeteranganBarang;
    this.crudService.create_NewStudent(record).then(resp => {
      this.NamaBarang = "";
      this.JumlahBarang = undefined;
      this.KeteranganBarang = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
 
  RemoveRecord(rowID) {
    this.crudService.delete_Student(rowID);
  }
 
  EditRecord(record) {
    record.isEdit = true;
    record.EditBarang = record.Barang;
    record.EditJumlah = record.Jumlah;
    record.EditKeterangan = record.Keterangan;
  }
 
  UpdateRecord(recordRow) {
    let record = {};
    record['Barang'] = recordRow.EditBarang;
    record['Jumlah'] = recordRow.EditJumlah;
    record['Keterangan'] = recordRow.EditKeterangan;
    this.crudService.update_Student(recordRow.id, record);
    recordRow.isEdit = false;
  }
 
 
}