import { Component } from '@angular/core';
import { NotificationRowComponent } from '@components/notifications/notification-row/notification-row.component';
import { NotificationType, AppNotification} from '@models/notification.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NotificationRowComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  notification : AppNotification = {
    id: 1,
    userId: 42,
    isRead: false,
    createdAt: "2025-01-30T17:45:00Z",
    type: NotificationType.MESSAGE,
    message: "vous a envoyé un nouveau message."
  };

}
