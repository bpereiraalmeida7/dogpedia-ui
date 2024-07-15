import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { Breed } from '../models/breed';

@Injectable({
  providedIn: 'root'
})
export class DogApiService {
  private apiUrl = 'https://api.thedogapi.com/v1';

  constructor(private http: HttpClient) {}

  getBreeds(page: number, limit: number): Observable<Breed[]> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('limit', limit.toString());
    return this.http.get<Breed[]>(`${this.apiUrl}/breeds`, { params });
  }

  getBreedImages(breedIds: number[]): Observable<any[]> {
    const requests = breedIds.map(id =>
      this.http.get(`${this.apiUrl}/images/search?breed_ids=${id}`)
    );
    return forkJoin(requests);
  }
}