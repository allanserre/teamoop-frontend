import { ChangeDetectionStrategy, Component, input, model, output, viewChild, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChipInputComponent, ChipInputProps } from '../../chips/chip-input/chip-input.component';
import { InputComponent } from '../input/input.component';
import { ClickOutsideDirective } from '../../../directives/click-outside.directive';

@Component({
  selector: 'app-input-multi-select',
  standalone: true,
  imports: [ReactiveFormsModule, ChipInputComponent, InputComponent, ClickOutsideDirective],
  templateUrl: './input-multi-select.component.html',
  styleUrl: './input-multi-select.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputMultiSelectComponent {
  chips = input.required<ChipInputProps[]>();
  showInput = model<boolean>(false);
  inputValue = model<string>('');
  canValidate = input<boolean>(true);
  chipDeleted = output<number>();
  chipAdded = output<string>();

  textInput = viewChild(InputComponent);

  deleteChip(deletedChipIndex: number) {
    this.chipDeleted.emit(deletedChipIndex);
  }

  inputFocused(focused: boolean) {
    if (!this.tryInputValidation()) return;

    this.showInput.set(focused);
    if (!focused) {
      this.validateChoice();
    }
  }

  validateChoice(pressEnter: boolean = false) {
    if (!this.tryInputValidation() && !pressEnter) return;

    const value = this.inputValue();
    if (value.length !== 0) {
      this.addChips(value);
      this.inputValue.set('');
    }
  }

  tryInputValidation(): boolean {
    const canValidate = this.canValidate();
    if (!canValidate) {
      this.textInput()?.triggerFocus();
    }
    return canValidate;
  }

  private addChips(text: string): void {
    this.chipAdded.emit(text);
  }
}
