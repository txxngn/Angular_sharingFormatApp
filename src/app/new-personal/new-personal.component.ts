import { Component, Input } from '@angular/core';
import {Personal,Sheridan} from '../classSetups';

@Component({
  selector: 'app-new-personal',
  templateUrl: './new-personal.component.html',
  styleUrl: './new-personal.component.css'
})

export class NewPersonalComponent {

  @Input() personal!: Personal;
  @Input() sheridan!: Sheridan;
  
}
