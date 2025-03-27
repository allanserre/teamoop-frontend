import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { AppNotification } from '../models/notification.model';
import { BehaviorSubject } from 'rxjs';
import { NotificationsMock } from './mock/notifications.mock';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private http: HttpClient = inject(HttpClient);

  private notificationsSubject: BehaviorSubject<AppNotification[]> = new BehaviorSubject<AppNotification[]>([]);
  public notifications$ = this.notificationsSubject.asObservable();

  fetchNotifications(mock: boolean = true) {
    if (environment.mock && mock) {
      this.notificationsSubject.next(this.sortNotifications(NotificationsMock));
    } else {
      this.http.get<AppNotification[]>(`${environment.apiUrl}/api/notifications`).subscribe(notifications => {
        this.notificationsSubject.next(this.sortNotifications(notifications));
      });
    }
  }

  private sortNotifications(notifications: AppNotification[]) {
    return notifications.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
}
