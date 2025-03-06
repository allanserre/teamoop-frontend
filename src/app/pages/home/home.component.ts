import { Component } from '@angular/core';
import { NotificationRowComponent } from '@components/notifications/notification-row/notification-row.component';
import { NotificationType, AppNotification } from '@models/notification.model';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
