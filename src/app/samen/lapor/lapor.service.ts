import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class LaporService {

  constructor(
    private firestore: AngularFirestore
  ) { }
  create_pickImg(record){
    return this.firestore.collection('lapor').add(record);
  }
  update_pickImg(record,recordID){
    this.firestore.doc('lapor/' + recordID).update(record);
  }
  delete_pickImg(record_id){
    this.firestore.doc('lapor/' + record_id).delete();
  }
  read_pickImg(){
    return this.firestore.collection('lapor').snapshotChanges();
  }
}
