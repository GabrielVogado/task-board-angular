import { inject, Injectable, signal } from '@angular/core';
import { Category } from '../model/category.model';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  private readonly apiUrl = environment.apiUrl;
  private readonly httpClient = inject(HttpClient);

  public categories = signal<Category[]>([]);

  public getCategories(): Observable<Category[]> {
    return this.httpClient
      .get<Category[]>(`${this.apiUrl}/categories`)
      .pipe(tap(categories => this.categories.set(categories)));
  }
}
