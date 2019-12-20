import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private firestore: AngularFirestore) { }

  create_event(record){
    return this.firestore.collection('event').add(record);
  }

  read_event(){
    return this.firestore.collection('event').snapshotChanges();
  }

  update_event(recordID, record){
    this.firestore.doc('event/'+ recordID).update(record);
  }

  delete_event(nama_kegiatan){
    this.firestore.collection('event').doc(nama_kegiatan).delete();
  }
}
