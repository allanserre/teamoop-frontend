import { ChangeDetectionStrategy, Component, model } from '@angular/core';

@Component({
  selector: 'app-slide-toggle',
  standalone: true,
  imports: [],
  templateUrl: './slide-toggle.component.html',
  styleUrl: './slide-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideToggleComponent {
  checked = model<boolean>(false);

  toggle() {
    this.checked.update(checked => !checked);
  }
}
