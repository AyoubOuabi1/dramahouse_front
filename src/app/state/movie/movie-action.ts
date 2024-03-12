import { createAction, props } from "@ngrx/store";
import { Movie } from "../../entities/movie";

export const loadAllMovies = createAction('[Movie] Load All Movies');

export const loadAllMoviesSuccess = createAction(
  '[Movie] Load All Movies Success',
  props<{ movies: Movie[] }>()
);

export const loadAllMoviesFailure = createAction(
  '[Movie] Load All Movies Failure',
  props<{ errorMessage: string }>()
);

export const loadMovieByCategory = createAction(
  '[Movie] Load Movie By Category',
  props<{ category: string }>()
);

export const loadMovieByCategorySuccess = createAction(
  '[Movie] Load Movie By Category Success',
  props<{ movies: Movie[] }>()
);

export const loadMovieByCategoryFailure = createAction(
  '[Movie] Load Movie By Category Failure',
  props<{ errorMessage: string }>()
);

export const loadMovieById = createAction(
  '[Movie] Load Movie By Id',
  props<{ id: number }>()
);

export const loadMovieByIdSuccess = createAction(
  '[Movie] Load Movie By Id Success',
  props<{ movie: Movie }>()
);

export const loadMovieByIdFailure = createAction(
  '[Movie] Load Movie By Id Failure',
  props<{ errorMessage: string }>()
);

export const addMovie = createAction(
  '[Movie] Add Movie',
  props<{ movie: Movie }>()
);

export const addMovieSuccess = createAction(
  '[Movie] Add Movie Success',
  props<{ movie: Movie }>()
);

export const addMovieFailure = createAction(
  '[Movie] Add Movie Failure',
  props<{ errorMessage: string }>()
);

export const deleteMovie = createAction(
  '[Movie] Delete Movie',
  props<{ id: number }>()
);

export const deleteMovieSuccess = createAction(
  '[Movie] Delete Movie Success'
);

export const deleteMovieFailure = createAction(
  '[Movie] Delete Movie Failure',
  props<{ errorMessage: string }>()
);

export const searchMoviesByName = createAction(
  '[Movie] Search Movies By Name',
  props<{ name: string }>()
);

export const searchMoviesByNameSuccess = createAction(
  '[Movie] Search Movies By Name Success',
  props<{ movies: Movie[] }>()
);

export const searchMoviesByNameFailure = createAction(
  '[Movie] Search Movies By Name Failure',
  props<{ errorMessage: string }>()
);

export const loadLastTenMovies = createAction('[Movie] Load Last Ten Movies');

export const loadLastTenMoviesSuccess = createAction(
  '[Movie] Load Last Ten Movies Success',
  props<{ movies: Movie[] }>()
);

export const loadLastTenMoviesFailure = createAction(
  '[Movie] Load Last Ten Movies Failure',
  props<{ errorMessage: string }>()
);
