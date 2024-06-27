import { Component, Input } from '@angular/core';
import { Personal, Sheridan } from '../classSetups';

@Component({
  selector: 'app-new-sheridan',
  templateUrl: './new-sheridan.component.html',
  styleUrl: './new-sheridan.component.css'
})

export class NewSheridanComponent {
  @Input() personal!: Personal;
  @Input() sheridan!: Sheridan;
  ademail: string = 'askanadvisor@sheridancollege.ca';
}
