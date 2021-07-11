import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Room} from '../model/room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private host=environment.host;
  constructor(private http: HttpClient) { }

  /**la methode returne l'objet de type observable*/
  getAllRooms():Observable<Room[]>{
    return this.http.get<Room[]>(this.host+"/rooms");
  }
  /**la methode returne l'objet de type observable*/
  getSelectedRooms():Observable<Room[]>{
    return this.http.get<Room[]>(this.host+"/rooms?selected=true");
  }
  getAvaillableRooms():Observable<Room[]>{
    return this.http.get<Room[]>(this.host+"/rooms?available=true");
  }
}
