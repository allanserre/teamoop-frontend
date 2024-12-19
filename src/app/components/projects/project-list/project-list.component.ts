import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-project-list',
  imports: [],
  standalone: true,
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {

  @Input() projects: { name: string; description: string; language: string; people: string[] }[] = [];


}
