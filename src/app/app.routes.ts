import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UiDesignComponent } from './pages/ui-design/ui-design.component';
import { DevModeGuard } from './guards/dev-mode.guards';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ui-design', component: UiDesignComponent, canActivate: [DevModeGuard] },
];
