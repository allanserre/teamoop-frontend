import { Component, signal } from '@angular/core';
import {MainService} from '@services/main.service';
import {NotificationRowComponent} from '@components/notifications/notification-row/notification-row.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NotificationRowComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  text = signal("");

  constructor(private service: MainService) {
    this.service.getHelloWorld().subscribe(res => {
      this.text.set(res);
    })
  }
}
