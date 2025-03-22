import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { NgClass } from '@angular/common';

export interface SegmentedButtonProps {
  label: string;
  icon?: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-segmented-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './segmented-button.component.html',
  styleUrl: './segmented-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SegmentedButtonComponent {
  buttons = input.required<SegmentedButtonProps[]>();
  selectedIndex = model<number>();

  buttonSelected(buttonIndex: number) {
    this.selectedIndex.set(buttonIndex);
  }
}
