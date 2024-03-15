import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WatchlistRes} from "../../entities/watchlist-res";
import {Observable} from "rxjs";
import {Movie} from "../../entities/movie";

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  private apiUrl = 'http://localhost:8081/api/v1/watch-list';

  constructor(private http: HttpClient) { }

  addMovieToWatchList(movieId : number): Observable<string> {
    const url = `${this.apiUrl}/add/${movieId}`;
    return this.http.post<string>(url, movieId);
  }
  loadWatchList(): Observable<WatchlistRes> {
    const url = `${this.apiUrl}/`;
    return this.http.get<WatchlistRes>(url);
  }


  checkIfMovieExistsInWatchlist(movieId: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/check-movie/${movieId}`);
  }

  removeMovieFromWatchlist(movieId: number) {
    return this.http.delete(`${this.apiUrl}/delete-movie?movieId=${movieId}`);
  }
}
