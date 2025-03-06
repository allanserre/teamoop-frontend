import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { DefaultPageWrapperComponent } from '@components/layout/default-page-wrapper/default-page-wrapper.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: DefaultPageWrapperComponent, children: [{ path: 'notifications', component: NotificationsComponent }] },
];
