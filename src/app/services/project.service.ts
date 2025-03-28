import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Project } from '@models/project.model';
import { MostRecentProjectsMock } from '@services/mock/project.mock';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiUrl = environment.apiUrl;
  private mockEnv = environment.mock;

  private http: HttpClient = inject(HttpClient);

  private projectsSubject: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);
  public projects$ = this.projectsSubject.asObservable();

  fetchMostRecentProjects(mock = true) {
    if (this.mockEnv && mock) {
      this.projectsSubject.next(MostRecentProjectsMock);
    } else {
      this.http.get<Project[]>(`${this.apiUrl}/api/projects`).subscribe(projects => {
        this.projectsSubject.next(projects);
      });
    }
  }

  constructor() {}
}
