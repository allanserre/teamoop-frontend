import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-default-page-wrapper',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './default-page-wrapper.component.html',
  styleUrl: './default-page-wrapper.component.scss',
})
export class DefaultPageWrapperComponent {}
