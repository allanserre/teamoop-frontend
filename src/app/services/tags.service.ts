import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { TagsMock } from '@services/mock/tags.mock';
import { Tags } from '@models/tags.model';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  private http: HttpClient = inject(HttpClient);

  searchTags(queryText: string, mock = true): Observable<Tags[]> {
    if (environment.mock && mock) {
      return of(TagsMock).pipe(delay(1000));
    } else {
      return this.http.get<Tags[]>(`${environment.apiUrl}/api/tags`, { params: { search: queryText } })
    }
  }
}
