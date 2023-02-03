import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection:  ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {

@Input()rooms: RoomList[] = [];

@Input()title: string = '';

@Output() selectedRoom = new EventEmitter<RoomList>();

ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  if(changes['title']){
    this.title = changes['title'].currentValue.toUpperCase();
  }
}

selectRoom(room: RoomList): void {
  this.selectedRoom.emit(room);
}


ngOnInit(): void {
    
}
}
