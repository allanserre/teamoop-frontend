import {booleanAttribute, Component, input} from '@angular/core';

@Component({
  selector: 'app-chip-menu',
  standalone: true,
  imports: [],
  templateUrl: './chip-menu.component.html',
  styleUrl: './chip-menu.component.scss'
})
export class ChipMenuComponent {
  active = input(false, {transform: booleanAttribute});
}
