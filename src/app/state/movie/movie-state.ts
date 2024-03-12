import { Movie } from '../../entities/movie';

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
