import { createReducer, on } from '@ngrx/store';
import { Movie } from '../../entities/movie';
import * as MovieActions from './movie-action';

export interface MovieState {
  movies: Movie[];
  selectedMovie: Movie | null;
  error: string | null;
}

export const initialState: MovieState = {
  movies: [],
  selectedMovie: null,
  error: null,
};

export const movieReducer = createReducer(
  initialState,

  on(MovieActions.loadAllMoviesSuccess, (state, { movies }) => ({
    ...state,
    movies,
    error: null
  })),

  on(MovieActions.loadAllMoviesFailure, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage
  })),
  on(MovieActions.loadLastTenMoviesSuccess, (state, { movies }) => ({
    ...state,
    movies,
    error: null
  })),
  on(MovieActions.loadLastTenMoviesFailure, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage
  })),
  on(MovieActions.loadMovieByCategorySuccess, (state, { movies }) => ({
    ...state,
    movies,
    error: null
  })),

  on(MovieActions.loadMovieByCategoryFailure, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage
  })),

  on(MovieActions.loadMovieByIdSuccess, (state, { movie }) => ({
    ...state,
    selectedMovie: movie,
    error: null
  })),

  on(MovieActions.loadMovieByIdFailure, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage
  })),

  on(MovieActions.addMovieSuccess, (state, { movie }) => ({
    ...state,
    movies: [...state.movies, movie],
    error: null
  })),

  on(MovieActions.addMovieFailure, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage
  })),

  on(MovieActions.deleteMovieSuccess, (state) => ({
    ...state,
    error: null
  })),

  on(MovieActions.deleteMovieFailure, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage
  })),

  on(MovieActions.searchMoviesByNameSuccess, (state, { movies }) => ({
    ...state,
    movies,
    error: null
  })),

  on(MovieActions.searchMoviesByNameFailure, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage
  })),


);
