import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-textarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-textarea.component.html',
  styleUrl: './input-textarea.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextareaComponent {
  value = model<string>('');
  placeholder = input<string>();
  height = input<string>('inherit');
  resizable = input<boolean>(true);

  resizableStyle = computed(() => {
    return this.resizable() ? 'both' : 'none';
  });
}
