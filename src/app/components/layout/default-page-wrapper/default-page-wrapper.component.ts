import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { FooterComponent } from '@components/layout/footer/footer.component';
import { TopBarComponent } from '@components/layout/top-bar/top-bar.component';

@Component({
  selector: 'app-default-page-wrapper',
  standalone: true,
  imports: [AppComponent, FooterComponent, TopBarComponent],
  templateUrl: './default-page-wrapper.component.html',
  styleUrl: './default-page-wrapper.component.scss',
})
export class DefaultPageWrapperComponent {}
