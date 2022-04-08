import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface UserInterface {
  name: string;
  age: string;
  id: number;
  isColored: boolean;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: UserInterface;
  
  @Output() userEvent : EventEmitter<UserInterface>;

  constructor() {
    this.userEvent = new EventEmitter<UserInterface>();
    this.user = {} as UserInterface
    this.user.isColored ? true : false;
   }

  ngOnInit(): void {
  }

  sendUserEvent() : void{
    this.userEvent.emit(this.user)
  }

}
