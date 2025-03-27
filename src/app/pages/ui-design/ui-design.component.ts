import { Component, computed, inject, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListItem, MatNavList } from '@angular/material/list';
import { ClassicButtonComponent } from '@components/classic-button/classic-button.component';
import { ChipInputComponent, ChipInputProps } from '@components/chips/chip-input/chip-input.component';
import { ProjectCardComponent } from '@components/project-card/project-card.component';
import { Tags } from '@models/tags.model';
import { NgTemplateOutlet } from '@angular/common';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ChipMenuComponent } from '@components/chips/chip-menu/chip-menu.component';
import { ChipTagComponent } from '@components/chips/chip-tag/chip-tag.component';
import { TopBarComponent } from '@components/layout/top-bar/top-bar.component';
import { InputComponent } from '@components/inputs/input/input.component';
import { InputTextareaComponent } from '@components/inputs/input-textarea/input-textarea.component';
import { InputCheckboxComponent } from '@components/inputs/input-checkbox/input-checkbox.component';
import { SlideToggleComponent } from '@components/inputs/slide-toggle/slide-toggle.component';
import { SegmentedButtonComponent, SegmentedButtonProps } from '@components/buttons/segmented-button/segmented-button.component';
import { InputDescriptionComponent } from '@components/inputs/input-description/input-description.component';
import { InputMultiSelectComponent } from '@components/inputs/input-multi-select/input-multi-select.component';
import { ProjectTagsSelectionComponent } from '@components/inputs/project-tags-selection/project-tags-selection.component';

interface MenuItem {
  libelle: string;
  code: string;
}

@Component({
  selector: 'app-ui-design',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatLabel,
    MatListItem,
    MatNavList,
    ClassicButtonComponent,
    ChipInputComponent,
    ProjectCardComponent,
    NgTemplateOutlet,
    MatFormField,
    MatIcon,
    MatInput,
    FormsModule,
    ChipMenuComponent,
    ChipTagComponent,
    TopBarComponent,
    InputComponent,
    InputTextareaComponent,
    InputCheckboxComponent,
    SlideToggleComponent,
    SegmentedButtonComponent,
    InputDescriptionComponent,
    InputMultiSelectComponent,
    ProjectTagsSelectionComponent,
  ],
  templateUrl: './ui-design.component.html',
  styleUrl: './ui-design.component.scss',
})
export class UiDesignComponent {
  searchInput = signal('');

  public sandboxItem: MenuItem = {
    libelle: 'Sandbox',
    code: 'sandbox',
  };

  private router = inject(Router);

  private MENU_ITEMS: MenuItem[] = [
    {
      libelle: 'Chips',
      code: 'chips',
    },
    {
      libelle: 'Buttons',
      code: 'buttons',
    },
    {
      libelle: 'Cards',
      code: 'cards',
    },
    {
      libelle: 'Layout',
      code: 'layout',
    },
    {
      libelle: 'Champs Input',
      code: 'inputs',
    },
  ];

  menuItems = computed(() => {
    return this.MENU_ITEMS.filter(
      menuItem =>
        menuItem.libelle.toLowerCase().includes(this.searchInput().toLowerCase()) ||
        menuItem.code.toLowerCase().includes(this.searchInput().toLowerCase())
    );
  });
  currentPage = signal<MenuItem>(this.sandboxItem);

  segmentedButton: SegmentedButtonProps[] = [
    {
      label: 'Preview',
      icon: 'fa-code',
    },
    {
      label: 'Texte',
    },
  ];

  chipsMulti: ChipInputProps[] = [
    {
      label: 'Angular',
    },
    {
      label: 'React',
    },
    {
      label: 'Vue',
    },
    {
      label: 'Typescript',
    },
  ];

  onClickMenuItem(item: MenuItem) {
    this.router.navigate(['/ui-design'], { fragment: item.code });
    this.currentPage.set(item);
  }

  // =========================== //
  //       Project Card          //
  // =========================== //

  tags: Tags[] = [
    { name: '#tag1', color: 'green' },
    { name: '#tag2', color: 'red' },
    { name: '#tag3', color: 'blue' },
  ];

  project = signal({
    id: 3,
    name: 'Description du projet',
    description: 'Nom du projet',
    startDate: new Date(),
    endDate: new Date(),
    active: true,
    tags: this.tags,
  });

  markdownText =
    "Lors de l'ajout d'un nouveau composant vous pouvez l'ajouter à la liste de ceux existant parmis l'un des catégories à disposition ou\n" +
    '```typescript\n' +
    'private MENU_ITEMS: MenuItem[] = [\n' +
    '{\n' +
    "libelle: 'Chips',\n" +
    "code: 'chips',\n" +
    '},\n' +
    '...\n' +
    '{\n' +
    "libelle: 'Layout',\n" +
    "code: 'layout',\n" +
    '},\n' +
    '];\n' +
    '```\n' +
    'Puis on ajout la case et le template associé pour faciliter la lisibilité :\n' +
    '```angular17html\n' +
    "@case ('layout') {\n" +
    '<div *ngTemplateOutlet="layout"></div>\n' +
    '}\n' +
    '<ng-template #layout>\n' +
    '<app-top-bar></app-top-bar>\n' +
    '</ng-template>\n' +
    '```';
}
