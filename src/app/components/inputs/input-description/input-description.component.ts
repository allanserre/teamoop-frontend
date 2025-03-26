import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { InputTextareaComponent } from '@components/inputs/input-textarea/input-textarea.component';
import { MarkdownComponent, provideMarkdown } from 'ngx-markdown';
import { SegmentedButtonComponent } from '@components/buttons/segmented-button/segmented-button.component';
import { ResizableDirective } from '@directives/resizable.directive';
import { ChipTagComponent } from '@components/chips/chip-tag/chip-tag.component';

@Component({
  selector: 'app-input-description',
  standalone: true,
  imports: [InputTextareaComponent, MarkdownComponent, SegmentedButtonComponent, ResizableDirective, ChipTagComponent],
  templateUrl: './input-description.component.html',
  styleUrl: './input-description.component.scss',
  providers: [provideMarkdown()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDescriptionComponent {
  value = model<string>('');
  placeholder = input<string>();
}
