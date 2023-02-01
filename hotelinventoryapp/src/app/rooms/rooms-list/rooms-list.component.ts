import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

@Input()rooms: RoomList[] = [];

@Output() selectedRoom = new EventEmitter<RoomList>();

selectRoom(room: RoomList): void {
  this.selectedRoom.emit(room);
}

ngOnInit(): void {
    
}
}
