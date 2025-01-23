import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-classic-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classic-button.component.html',
  styleUrl: './classic-button.component.scss'
})
export class ClassicButtonComponent {
  @Input() color: 'primary' | 'secondary' | 'success' | 'error' | 'danger' | 'black' | 'white' = 'primary';
  @Input() style: 'outlined' | 'filled' = 'filled';
  @Input() disabled = false;
}
