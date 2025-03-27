import { Component, inject } from '@angular/core';
import { NotificationRowComponent } from '../../core/components/notifications/notification-row/notification-row.component';
import { NotificationService } from '../../core/services/notification.service';
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
