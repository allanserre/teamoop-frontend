import { Component, effect, model, viewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChipInputComponent, ChipInputProps } from '@components/chips/chip-input/chip-input.component';
import { InputComponent } from '@components/inputs/input/input.component';
import { ClickOutsideDirective } from '../../../directives/click-outside.directive';

@Component({
  selector: 'app-input-multi-select',
  standalone: true,
  imports: [ReactiveFormsModule, ChipInputComponent, InputComponent, ClickOutsideDirective],
  templateUrl: './input-multi-select.component.html',
  styleUrl: './input-multi-select.component.scss',
})
export class InputMultiSelectComponent {
  chips = model.required<ChipInputProps[]>();
  showInput = model<boolean>(false);
  inputValue = model<string>('');

  deleteChip(deletedChip: ChipInputProps) {
    this.chips.update(chips => {
      const filteredChips = chips.filter(chip => chip !== deletedChip);
      return [...filteredChips];
    });
  }

  inputFocused(focused: boolean) {
    this.showInput.set(focused);
    if (!focused) {
      this.validateChoice();
    }
  }

  validateChoice() {
    const value = this.inputValue();
    if (value.length !== 0) {
      this.addChips(value);
      this.inputValue.set('');
    }
  }

  private addChips(text: string, icon?: string): void {
    this.chips.update(chips => {
      chips.push({
        label: text,
      });
      return [...chips];
    });
  }
}
