import { Component } from '@angular/core';

@Component({
  selector: 'app-input-description',
  standalone: true,
  imports: [],
  templateUrl: './input-description.component.html',
  styleUrl: './input-description.component.scss'
})
export class InputDescriptionComponent {
  label!: string;
  placeholder!: string;
}
