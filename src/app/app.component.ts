import { Component } from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Hello world how are you doing";
  jsonValue = {
    a: "hello",
    b: "bye"
  }
  userObject = {
    name: "John",
    age: "32",
    id : 0
  }
  


  constructor(private httpService : HttpService){

  }

  
  handleEvent(event){
    console.log(event);
  }

}
