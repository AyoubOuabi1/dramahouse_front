import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../../entities/movie";
import {WatchlistRes} from "../../entities/watchlist-res";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'http://localhost:8081/api/v1/user/movies';

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  getMovieById(id: number): Observable<Movie> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Movie>(url);
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiUrl, movie);
  }

  deleteMovie(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  searchMoviesByName(name: string): Observable<Movie[]> {
    const url = `${this.apiUrl}/search?name=${name}`;
    return this.http.get<Movie[]>(url);
  }

  searchMoviesByGenre(genre: string): Observable<Movie[]> {
    const url = `${this.apiUrl}/search/genre?name=${genre}`;
    return this.http.get<Movie[]>(url);
  }

  getLastTenMovies() {
    const url = `${this.apiUrl}/last-ten`;
    return this.http.get<Movie[]>(url);
  }


}
