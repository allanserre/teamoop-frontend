import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-notification-row',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './notification-row.component.html',
  styleUrl: './notification-row.component.scss'
})
export class NotificationRowComponent {

}
