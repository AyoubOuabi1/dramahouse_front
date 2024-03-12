import {Component, OnInit} from '@angular/core';
import {Movie} from "../../../entities/movie";
import {Observable} from "rxjs";
import {AppState} from "../../../state/app-state";
import {select, Store} from "@ngrx/store";
import * as MovieActions from '../../../state/movie/movie-action';
@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css']
})
export class TopMoviesComponent implements OnInit{
    movies!:Observable<Movie[]>;

    constructor(private store:Store<AppState>) {}

  ngOnInit(): void {
      this.store.dispatch(MovieActions.loadLastTenMovies())
      this.movies=this.store.pipe(select(state => state.movie.movies));
  }
}
