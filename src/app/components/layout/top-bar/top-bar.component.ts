import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NavigationStart, Router, RouterLink } from '@angular/router';
import { ClassicButtonComponent } from '@components/classic-button/classic-button.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [ClassicButtonComponent, RouterLink],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {}
