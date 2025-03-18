import { Component, computed, inject, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListItem, MatNavList } from '@angular/material/list';
import { ClassicButtonComponent } from '@components/classic-button/classic-button.component';
import { ChipInputComponent } from '@components/chips/chip-input/chip-input.component';
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
  ];

  menuItems = computed(() => {
    return this.MENU_ITEMS.filter(
      menuItem =>
        menuItem.libelle.toLowerCase().includes(this.searchInput().toLowerCase()) ||
        menuItem.code.toLowerCase().includes(this.searchInput().toLowerCase())
    );
  });
  currentPage = signal<MenuItem>(this.MENU_ITEMS[0]);

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
}
