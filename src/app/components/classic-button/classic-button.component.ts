import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output() clickEvent = new EventEmitter<void>();

  onClick(): void {
    if (!this.disabled) {
      this.clickEvent.emit();
    }
  }
  
}
