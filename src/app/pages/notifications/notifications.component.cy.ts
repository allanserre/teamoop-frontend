import { NotificationsComponent } from './notifications.component';
import { NotificationService } from '@services/notifications.service';
import { provideHttpClient } from '@angular/common/http';

describe('NotificationsComponent', () => {
  it('should mount', () => {
    cy.mount(NotificationsComponent, {
      providers: [NotificationService, provideHttpClient()],
    });
  });
});
