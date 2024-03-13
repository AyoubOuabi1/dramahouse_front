import {Component, OnInit} from '@angular/core';
import {Movie} from "../../../entities/movie";
import {Observable} from "rxjs";
import {AppState} from "../../../state/app-state";
import {select, Store} from "@ngrx/store";
import * as MovieActions from '../../../state/movie/movie-action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css']
})
export class TopMoviesComponent implements OnInit{
    moviesist!:Observable<Movie[]>;

    constructor(private store:Store<AppState>,
                private router: Router) {}

  ngOnInit(): void {
      this.store.dispatch(MovieActions.loadLastTenMovies())
      this.moviesist=this.store.pipe(select(state => state.movie.movies));
  }
  watchNow(movieId: number) {
    this.router.navigate(['/movieDetail', movieId]);
  }

}
