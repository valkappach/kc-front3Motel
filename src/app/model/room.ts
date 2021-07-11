import {Reservation} from './reservation';

export interface Room{

  id:number;
  roomNumber:string;
  roomCode:string;
  beds:number;
  checkIn:Date;
  checkOut:Date;
  available:boolean;
  currentPrice:number;
  promotion:boolean;
  selected:boolean;
  photoRoomUrl:string;
  description:string;
  reservation:Reservation;

}

    // private String photoRoomUrl;
    //private LocalDate releaseDate;
    //	private LocalDate registerDate;
    // @ManyToOne
    // private Roomtype roomtype;
    // @Transient
    // private int quantity = 1;


