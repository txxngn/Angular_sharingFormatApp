import { Component, Input } from '@angular/core';
import {Personal, Sheridan} from '../classSetups';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() personal!: Personal;
  @Input() sheridan!: Sheridan;



}
