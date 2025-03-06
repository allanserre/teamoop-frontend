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
  private mock = environment.apiUrl;
  
  private http: HttpClient = inject(HttpClient);

  private _notificationsSubject: BehaviorSubject<AppNotification[]> = new BehaviorSubject<AppNotification[]>([]);
  public notifications$ = this._notificationsSubject.asObservable();

  fetchNotifications() {
    if (this.mock) {
      this._notificationsSubject.next(NotificationsMock);
    } else {
      this.http.get<AppNotification[]>(`${this.apiUrl}/api/notifications`).subscribe(notifications => {
        this._notificationsSubject.next(notifications);
      });
    }
  }
}
