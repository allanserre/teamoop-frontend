import { Project } from './../../models/project.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  project = new Project();
  constructor() {
    this.project.titre = "Project Title";
    this.project.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc";
  }
}
