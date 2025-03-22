import { Component, effect, ElementRef, input, model, output, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  value = model<string>();
  placeholder = input<string>();
  focus = input<boolean>(false);
  input = viewChild.required('input', { read: ElementRef });
  validate = output<void>();
  unfocused = output<void>();

  constructor() {
    effect(() => {
      if (this.focus()) {
        this.input().nativeElement.focus();
      }
    });
  }
}
