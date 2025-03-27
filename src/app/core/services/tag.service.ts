import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { TagsMock } from './mock/tags.mock';
import { Tag } from '../models/tag.model';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  private http: HttpClient = inject(HttpClient);

  searchTags(queryText: string, mock = true): Observable<Tag[]> {
    if (environment.mock && mock) {
      return of(TagsMock).pipe(delay(2000));
    } else {
      return this.http.get<Tag[]>(`${environment.apiUrl}/api/tags`, { params: { search: queryText } });
    }
  }
}
