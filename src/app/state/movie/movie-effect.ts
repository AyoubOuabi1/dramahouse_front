import {Injectable} from "@angular/core";
import {MovieService} from "../../service/movies/movie.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {AppState} from "../app-state";
import {catchError, map, mergeMap} from "rxjs/operators";
import * as MovieActions from "./movie-action";
@Injectable()
export class MovieEffect{
    constructor(private movieService: MovieService,
                private actions$: Actions
    ) {
    }

    // Add the effect here
    loadAllMovies$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(MovieActions.loadAllMovies),
        mergeMap(() => this.movieService.getAllMovies().pipe(
          map(movies => MovieActions.loadAllMoviesSuccess({movies})),
          catchError((errorMessage) => [MovieActions.loadAllMoviesFailure({errorMessage})])
        ))
      );
    });
    loadLastTenMoviesAdded$ = createEffect(() => {

      return this.actions$.pipe(
        ofType(MovieActions.loadLastTenMovies),
        mergeMap(() => this.movieService.getLastTenMovies().pipe(
          map(movies => MovieActions.loadLastTenMoviesSuccess({movies})),
          catchError((errorMessage) => [MovieActions.loadLastTenMoviesFailure({errorMessage})])
        ))
      );
    });


    loadMovieByCategory$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(MovieActions.loadMovieByCategory),
        mergeMap((action) => this.movieService.searchMoviesByGenre(action.category).pipe(
          map(movies => MovieActions.loadMovieByCategorySuccess({movies})),
          catchError((errorMessage) => [MovieActions.loadMovieByCategoryFailure({errorMessage})])
        ))
      );
    });

  loadMovieById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MovieActions.loadMovieById),
      mergeMap((action) => this.movieService.getMovieById(action.id).pipe(
        map(movie => MovieActions.loadMovieByIdSuccess({movie})),
        catchError((errorMessage) => [MovieActions.loadMovieByIdFailure({errorMessage})])
      ))
    );
  });

  addMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MovieActions.addMovie),
      mergeMap((action) => this.movieService.addMovie(action.movie).pipe(
        map(movie => MovieActions.addMovieSuccess({movie})),
        catchError((errorMessage) => [MovieActions.addMovieFailure({errorMessage})])
      ))
    );
  });

  deleteMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MovieActions.deleteMovie),
      mergeMap((action) => this.movieService.deleteMovie(action.id).pipe(
        map(() => MovieActions.deleteMovieSuccess()),
        catchError((errorMessage) => [MovieActions.deleteMovieFailure({errorMessage})])
      ))
    );
  });

  searchMoviesByName$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MovieActions.searchMoviesByName),
      mergeMap((action) => this.movieService.searchMoviesByName(action.name).pipe(
        map(movies => MovieActions.searchMoviesByNameSuccess({movies})),
        catchError((errorMessage) => [MovieActions.searchMoviesByNameFailure({errorMessage})])
      ))
    );
  });

}
