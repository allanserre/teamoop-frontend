import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UiDesignComponent } from './pages/ui-design/ui-design.component';
import { DevModeGuard } from './guards/dev-mode.guards';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { DefaultPageWrapperComponent } from '@components/layout/default-page-wrapper/default-page-wrapper.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ui-design', component: UiDesignComponent, canActivate: [DevModeGuard] },
  { path: '', component: DefaultPageWrapperComponent, children: [{ path: 'notifications', component: NotificationsComponent }] },
];
