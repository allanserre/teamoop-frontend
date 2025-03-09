import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { AppNotification } from '@models/notification.model';
import { BehaviorSubject } from 'rxjs';
import { NotificationsMock } from './mock/notifications.mock';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private apiUrl = environment.apiUrl;
  private mockEnv = environment.apiUrl;

  private http: HttpClient = inject(HttpClient);

  private notificationsSubject: BehaviorSubject<AppNotification[]> = new BehaviorSubject<AppNotification[]>([]);
  public notifications$ = this.notificationsSubject.asObservable();

  fetchNotifications(mock: boolean = true) {
    if (this.mockEnv && mock) {
      this.notificationsSubject.next(NotificationsMock);
    } else {
      this.http.get<AppNotification[]>(`${this.apiUrl}/api/notifications`).subscribe(notifications => {
        this.notificationsSubject.next(notifications);
      });
    }
  }
}
