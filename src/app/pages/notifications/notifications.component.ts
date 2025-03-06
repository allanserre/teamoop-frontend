import { Component, inject } from '@angular/core';
import { AppNotification, NotificationType } from '@models/notification.model';
import { NotificationRowComponent } from '../../components/notifications/notification-row/notification-row.component';
import { NotificationService } from '@services/notifications.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NotificationRowComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
})
export class NotificationsComponent {
  private notificationsService = inject(NotificationService);

  notifications = toSignal(this.notificationsService.notifications$, { initialValue: [] });

  constructor() {
    this.notificationsService.fetchNotifications();
  }
}
