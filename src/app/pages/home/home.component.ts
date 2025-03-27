import { Component, inject } from '@angular/core';
import { SvgFileComponent } from '../../shared/ui/svg-file/svg-file.component';
import { ProjectListComponent } from '../../core/components/project-list/project-list.component';
import { ProjectService } from '../../core/services/project.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SvgFileComponent, ProjectListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private projectService = inject(ProjectService);

  mostRecentProjects = toSignal(this.projectService.projects$, { initialValue: [] });

  constructor() {
    this.projectService.fetchMostRecentProjects();
  }
}
