import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Genre} from "../../entities/genre";

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private baseUrl = 'http://localhost:8081/api/v1/user/genres';

  constructor(private http: HttpClient) { }

  getAllGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.baseUrl);
  }

  addGenre(genreDTO: Genre): Observable<Genre> {
    return this.http.post<Genre>(this.baseUrl, genreDTO);
  }
}
