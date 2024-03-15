import { Movie } from '../../entities/movie';
import {WatchlistRes} from "../../entities/watchlist-res";

export interface MovieState {
  movies: Movie[];
  selectedMovie: Movie | null;
  error: string | null;
  watchlist: WatchlistRes | null
  exists: boolean;
}

export const initialState: MovieState = {
  movies: [],
  selectedMovie: null,
  error: null,
  watchlist: null,
  exists: false
};

