import { CommonModule } from '@angular/common';
import { Project } from './../../models/project.model';
import { Component, Input } from '@angular/core';
import { ChipTagComponent } from "../chips/chip-tag/chip-tag.component";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, ChipTagComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  
  @Input({required: true}) project!: Project;  
}
