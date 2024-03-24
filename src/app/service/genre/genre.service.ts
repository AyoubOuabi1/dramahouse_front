import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Genre} from "../../entities/genre";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  //private baseUrl = 'http://localhost:8081/api/v1/genres';
  private baseUrl = environment.apiUrl+"genres";
  constructor(private http: HttpClient) { }

  getAllGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.baseUrl);
  }

  addGenre(genreDTO: Genre): Observable<Genre> {
    return this.http.post<Genre>(this.baseUrl, genreDTO);
  }

  deleteGenre(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
