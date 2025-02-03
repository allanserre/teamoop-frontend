import { Component, signal } from '@angular/core';
import {MainService} from '@services/main.service';
import {NotificationRowComponent} from '@components/notifications/notification-row/notification-row.component';
import {Notification, NotificationType} from '@models/notification.model';


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

  notification : Notification = {
    id: 1,
    userId: 42,
    isRead: false,
    createdAt: "2025-01-30T17:45:00Z",
    type: NotificationType.MESSAGE,
    message: "vous a envoyé un nouveau message."
  };

  constructor(private service: MainService) {
    this.service.getHelloWorld().subscribe(res => {
      this.text.set(res);
    })
  }
}
