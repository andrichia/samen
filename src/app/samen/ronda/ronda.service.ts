import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RondaService {

  constructor(private firestore: AngularFirestore) { }

  create_ronda(record){
    return this.firestore.collection('ronda').add(record);
  }

  read_ronda(){
    return this.firestore.collection('ronda').snapshotChanges();
  }

  update_ronda(recordID, record){
    this.firestore.doc('ronda/' + recordID).update(record);
  }

  create_penduduk(record){
    return this.firestore.collection('penduduk').add(record);
  }

  read_penduduk(){
    return this.firestore.collection('penduduk').snapshotChanges();
  }

  delete_ronda(rowid){
    this.firestore.collection('ronda').doc(rowid).delete();
  }
}
