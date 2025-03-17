import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { ClassicButtonComponent } from '@components/classic-button/classic-button.component';
import { AppNotification } from '@models/notification.model';
import { Router } from '@angular/router';
import { ElapsedTimePipe } from '../../../pipes/ElapsedTimePipe';

@Component({
  selector: 'app-notification-row',
  standalone: true,
  imports: [ClassicButtonComponent, ElapsedTimePipe],
  templateUrl: './notification-row.component.html',
  styleUrl: './notification-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationRowComponent {
  notification = input.required<AppNotification>();
  showDetails = output();

  private router = inject(Router);

  navigateToUserProfil() {
    this.router.navigate(['/profile', { id: this.notification().userId }]);
  }
}
