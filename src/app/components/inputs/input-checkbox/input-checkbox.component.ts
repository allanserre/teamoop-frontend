import { Component, input, model } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-checkbox',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './input-checkbox.component.html',
  styleUrl: './input-checkbox.component.scss',
})
export class InputCheckboxComponent {
  checked = model.required<boolean>();
  disabled = input(false);

  toggleCheck() {
    if (!this.disabled()) {
      this.checked.update(value => !value);
    }
  }
}
