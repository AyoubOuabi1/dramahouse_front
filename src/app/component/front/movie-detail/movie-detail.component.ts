import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app-state';
import { Movie } from '../../../entities/movie';
import * as MovieActions from '../../../state/movie/movie-action';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie$!: Observable<Movie | null>;
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.store.dispatch(MovieActions.loadMovieById({ id }));
      this.movie$ = this.store.select(state => state.movie.selectedMovie);
    });
  }
}
