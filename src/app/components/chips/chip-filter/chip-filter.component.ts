import {booleanAttribute, Component, input} from '@angular/core';

export type ChipFilterType = 'assist' | 'filter' | 'input';


@Component({
  selector: 'app-chip-filter',
  standalone: true,
  imports: [],
  templateUrl: './chip-filter.component.html',
  styleUrl: './chip-filter.component.scss'
})
export class ChipFilterComponent {
  type = input<ChipFilterType>('assist');
  selected = input(false, {transform: booleanAttribute})
}
