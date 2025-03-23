import { AfterViewInit, Component, ElementRef, input, model, output, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements AfterViewInit {
  value = model<string>();
  placeholder = input<string>();
  focus = input<boolean>(false);
  input = viewChild.required('input', { read: ElementRef });
  validate = output<void>();
  unfocused = output<void>();

  ngAfterViewInit() {
    if (this.focus()) {
      this.input().nativeElement.focus();
    }
  }

  triggerFocus() {
    this.input().nativeElement.focus();
  }
}
