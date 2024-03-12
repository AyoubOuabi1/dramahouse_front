import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../../../entities/movie';
import { AppState } from '../../../state/app-state';
import * as MovieActions from '../../../state/movie/movie-action';
@Component({
  selector: 'app-latest-movies',
  templateUrl: './latest-movies.component.html',
  styleUrls: ['./latest-movies.component.css']
})
export class LatestMoviesComponent implements OnInit {
  movies$!: Observable<Movie[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(MovieActions.loadAllMovies());
    this.movies$ = this.store.pipe(select(state => state.movie.movies));
  }
}
