import { Component } from '@angular/core';
import { Personal, Sheridan } from './classSetups';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sharingFormatApp';

  mydata: Personal = { country: "Canada", first: "Thai", last: "Nguyen" };
  school: Sheridan = { email: "ngquocth@sheridan.ca", id: 1994, login: "ngquocth@sheridan1994" };


}
