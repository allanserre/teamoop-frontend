import { NotificationsComponent } from './notifications.component';
import { NotificationService } from '../../core/services/notification.service';
import { provideHttpClient } from '@angular/common/http';

describe('NotificationsComponent', () => {
  it('should mount', () => {
    cy.mount(NotificationsComponent, {
      providers: [NotificationService, provideHttpClient()],
    });
  });
});
