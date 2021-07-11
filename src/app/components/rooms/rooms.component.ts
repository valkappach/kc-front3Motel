import { Component, OnInit } from '@angular/core';
import {RoomsService} from '../../services/rooms.service';
import {Room} from '../../model/room';
import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import {AppDataState, DataStateEnum} from '../../state/room.state';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  //le dolard c'est pour dire que rooms est du type obsevable.
  //observable reçois le la liste room vide ou | null=null
  //IL ATTEND L'OBJET DE TYPE AppDataState ...
  rooms$:Observable<AppDataState< Room[]>>|null=null;



  constructor(private roomService: RoomsService) { }

  ngOnInit(): void {

  }
  onGetAllRooms(){
    this.rooms$=
      this.roomService.getAllRooms().pipe(
        map(data=>({dataState: DataStateEnum.LOADED, data:data})), startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState:DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

}
