import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';
import { Component, input } from '@angular/core';
import { ChipTagComponent } from '../../../shared/ui/chips/chip-tag/chip-tag.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, ChipTagComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  project = input.required<Project>();
}
