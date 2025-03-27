import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UiDesignComponent } from './pages/ui-design/ui-design.component';
import { DevModeGuard } from './core/guards/dev-mode.guards';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { DefaultPageWrapperComponent } from './layouts/default-page-wrapper/default-page-wrapper.component';

export const routes: Routes = [
  { path: 'ui-design', component: UiDesignComponent, canActivate: [DevModeGuard] },
  {
    path: '',
    component: DefaultPageWrapperComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'notifications', component: NotificationsComponent },
    ],
  },
];
