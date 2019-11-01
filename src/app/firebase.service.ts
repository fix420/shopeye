import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { AngularFireList, AngularFireDatabase } from "angularfire2/database";

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  constructor(private db: AngularFireDatabase) {}

  public getList(ref): AngularFireList<any> {
    return this.db.list(ref);
  }

  public getListSnapshot(list: AngularFireList<any>): Observable<any> {
    return list.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val()
        }))
      )
    );
  }
}
