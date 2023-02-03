import { DoCheck } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck {
  hotelName: string = 'Kotlin Hotel';
  hideRooms: boolean = false;
  numberOfRooms: number = 10;
  title: string = 'Room List';

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  }
  roomList: RoomList[] = [];

  selectedRoom!: RoomList;

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }
  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
  addRoom(){
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Apartment',
      amenities: 'House',
      price: 1000,
      photos: 'http://placehold.it/300x300',
      checkInTime: new Date(),
      checkOutTime: new Date(),
      rating: 4
    };
    this.roomList = [...this.roomList, room];
  }
  
  constructor() {

  }
  ngDoCheck(): void {
    console.log("OnChanges is called");
  }
  ngOnInit(): void {
      this.roomList = [{
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free WI-FI, TV, Bathroom, Kitchen',
        price: 500,
        photos: 'https://unsplash.com/photos/T5pL6ciEn-I',
        checkInTime: new Date('11-Nov-2021'),
        checkOutTime: new Date('12-Nov-2021'),
        rating: 9.45,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free WI-FI, TV, Bathroom',
        price: 400,
        photos: 'https://unsplash.com/photos/T5pL6ciEn-I',
        checkInTime: new Date('12-Nov-2021'),
        checkOutTime: new Date('13-Nov-2021'),
        rating: 9.87,
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free WI-FI, TV, Bathroom, Bathtub',
        price: 12000,
        photos: 'https://unsplash.com/photos/T5pL6ciEn-I',
        checkInTime: new Date('13-Nov-2021'),
        checkOutTime: new Date('14-Nov-2021'),
        rating: 9.95,
      }];
  }
}
