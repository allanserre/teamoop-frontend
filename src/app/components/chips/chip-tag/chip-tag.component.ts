import {Component, input} from '@angular/core';

export type ChipTagColor = 'red' | 'green' | 'orange' | 'blue' | 'light-blue';

@Component({
  selector: 'app-chip-tag',
  standalone: true,
  imports: [],
  templateUrl: './chip-tag.component.html',
  styleUrl: './chip-tag.component.scss'
})
export class ChipTagComponent {
  color = input<ChipTagColor>('blue');
}
