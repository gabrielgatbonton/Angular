import { Component } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName: string = 'Kotlin Hotel';
  hideRooms: boolean = false;
  numberOfRooms: number = 10;

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  constructor() {

  }

}
