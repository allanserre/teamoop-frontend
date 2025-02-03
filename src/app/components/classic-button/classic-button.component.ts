import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { ButtonColor } from './button.type';

@Component({
  selector: 'app-classic-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classic-button.component.html',
  styleUrl: './classic-button.component.scss',
})
export class ClassicButtonComponent {
  color = input<ButtonColor>('primary');
  filled = input<boolean>(true);
  disabled = input<boolean>(false);

  clicked = output<void>();

  handleClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
