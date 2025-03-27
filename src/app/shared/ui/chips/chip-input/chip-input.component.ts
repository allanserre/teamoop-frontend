import { Component, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export interface ChipInputProps {
  label: string;
  icon?: string;
}

@Component({
  selector: 'app-chip-input',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './chip-input.component.html',
  styleUrl: './chip-input.component.scss',
})
export class ChipInputComponent {
  chipClosed = output<void>();
}
