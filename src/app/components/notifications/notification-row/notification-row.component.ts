import {Component, input, output} from '@angular/core';
import {ClassicButtonComponent} from '@components/classic-button/classic-button.component';
import {Notification} from '@models/notification.model';
import {Router} from '@angular/router';
import {ElapsedTimePipe} from '../../../pipes/ElapsedTimePipe';

@Component({
  selector: 'app-notification-row',
  standalone: true,
  imports: [
    ClassicButtonComponent,
    ElapsedTimePipe
  ],
  templateUrl: './notification-row.component.html',
  styleUrl: './notification-row.component.scss'
})
export class NotificationRowComponent {

  notification = input.required<Notification>();
  showDetails = output();

  constructor(private router: Router) {
  }

  navigateToUserProfil() {
    this.router.navigate(['/profile', {id : this.notification().userId}]);
  }

}
