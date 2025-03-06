import { CommonModule } from '@angular/common';
import { Component, ElementRef, input, output, AfterContentInit, signal, computed } from '@angular/core';
import { ButtonColor } from './button.type';

@Component({
  selector: 'app-classic-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classic-button.component.html',
  styleUrl: './classic-button.component.scss',
})
export class ClassicButtonComponent implements AfterContentInit {
  color = input<ButtonColor>('primary');
  filled = input<boolean>(true);
  disabled = input<boolean>(false);

  clicked = output<void>();
  hasIcon = signal(false);

  buttonClassList = computed(() => [this.color(), this.filled() ? 'filled' : 'outlined']);

  constructor(private elementRef: ElementRef) {}

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.sanitizeIcons();
      this.hasIcon.set(this.detectIcon());
    });
  }

  private sanitizeIcons(): void {
    if (!this.elementRef || !this.elementRef.nativeElement) {
      return;
    }
    const buttonElement: HTMLElement = this.elementRef.nativeElement;
    const icons: NodeListOf<HTMLElement> = buttonElement.querySelectorAll('i, mat-icon');

    if (icons.length > 1) {
      icons.forEach((icon: HTMLElement, index: number) => {
        if (index > 0) {
          icon.remove();
        }
      });
    }
  }

  private detectIcon(): boolean {
    return this.elementRef.nativeElement.querySelector('i') !== null;
  }

  handleClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
