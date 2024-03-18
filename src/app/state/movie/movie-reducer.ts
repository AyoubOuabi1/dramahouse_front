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
  on(MovieActions.updateMovieSuccess, (state, { movie }) => ({
    ...state,
    movies: state.movies.map(m => m.id === movie.id ? movie : m),
    error: null
  })),

  on(MovieActions.deleteMovieSuccess, (state, { id }) => ({
    ...state,
    movies: state.movies.filter(movie => movie.id !== id),
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

  on(MovieActions.addMovieToWatchlistSuccess, (state, { message }) => ({
    ...state,
    message,
    error: null
    }
  )),

  on(MovieActions.addMovieToWatchlistFailure, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage
  })),

  on(MovieActions.checkIfMovieExistsInWatchlistSuccess, (state, { exists }) => ({
    ...state,
    exists,
    error: null
  })),

  on(MovieActions.checkIfMovieExistsInWatchlistFailure, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage
  })),

  on(MovieActions.deleteMovieFromWatchlistSuccess, (state) => ({
    ...state,
    error: null
  })),

  on(MovieActions.deleteMovieFromWatchlistFailure, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage
  })),
  on(MovieActions.loadWatchlistSuccess, (state, { watchlist }) => ({
    ...state,
    watchlist,
    error: null
  })),



);
