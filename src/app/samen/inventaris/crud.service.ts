
import { Injectable } from '@angular/core';
 
import { AngularFirestore } from '@angular/fire/firestore';
 
@Injectable({
  providedIn: 'root'
})
export class CrudService {
 
  constructor(
    private firestore: AngularFirestore
  ) { }
 
 
  create_NewStudent(record) {
    return this.firestore.collection('Barang').add(record);
  }
 
  read_Barang() {
    return this.firestore.collection('Barang').snapshotChanges();
  }
 
  update_Student(recordID,record){
    this.firestore.doc('Barang/' + recordID).update(record);
  }
 
  delete_Student(record_id) {
    this.firestore.doc('Barang/' + record_id).delete();
  }
}