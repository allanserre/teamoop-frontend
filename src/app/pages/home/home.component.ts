import { Component, signal } from '@angular/core';
import { MainService } from '../../services/main.service';
import {ChipFilterComponent} from '../../components/chips/chip-filter/chip-filter.component';
import {ChipMenuComponent} from '../../components/chips/chip-menu/chip-menu.component';
import {ChipTagComponent} from '../../components/chips/chip-tag/chip-tag.component';

@Component({
  selector: 'app-home',
  imports: [
    ChipFilterComponent,
    ChipMenuComponent,
    ChipTagComponent
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  text = signal("");

  constructor(private service: MainService) {
    this.service.getHelloWorld().subscribe(res => {
      this.text.set(res);
    })
  }
}
