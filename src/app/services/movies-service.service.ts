import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  private baseUrl = 'http://localhost:8080/api/v1/movies';

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl);
  }

  getMoviesByName(name:string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl+`/search?name=${name}`);
  }
  getMoviesByGenre(genre:string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl+`/search/genre/name=${genre}`);
  }
  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/${id}`);
  }

  addMovie(movieData: any): Observable<Movie> {
    return this.http.post<Movie>(this.baseUrl, movieData);
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
