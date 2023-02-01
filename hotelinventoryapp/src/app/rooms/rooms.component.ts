import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName: string = 'Kotlin Hotel';
  hideRooms: boolean = false;
  numberOfRooms: number = 10;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  }
  roomList: RoomList[] = [{
    roomNumber: 1,
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner, Free WI-FI, TV, Bathroom, Kitchen',
    price: 500,
    photos: 'https://unsplash.com/photos/T5pL6ciEn-I',
    checkInTime: new Date('11-Nov-2021'),
    checkOutTime: new Date('12-Nov-2021'),
  },
  {
    roomNumber: 2,
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner, Free WI-FI, TV, Bathroom',
    price: 400,
    photos: 'https://unsplash.com/photos/T5pL6ciEn-I',
    checkInTime: new Date('12-Nov-2021'),
    checkOutTime: new Date('13-Nov-2021'),
  },
  {
    roomNumber: 3,
    roomType: 'Private Suite',
    amenities: 'Air Conditioner, Free WI-FI, TV, Bathroom, Bathtub',
    price: 12000,
    photos: 'https://unsplash.com/photos/T5pL6ciEn-I',
    checkInTime: new Date('13-Nov-2021'),
    checkOutTime: new Date('14-Nov-2021'),
  }]

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  constructor() {

  }

}
