import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Movie } from "../../../entities/movie";
import { select, Store } from "@ngrx/store";
import { AppState } from "../../../state/app-state";
import * as MovieActions from "../../../state/movie/movie-action";
import {Genre} from "../../../entities/genre";
import {GenreService} from "../../../service/genre/genre.service";

@Component({
  selector: 'app-movies-gallery',
  templateUrl: './movies-gallery.component.html',
  styleUrls: ['./movies-gallery.component.css']
})
export class MoviesGalleryComponent implements OnInit {
  movies$!: Observable<Movie[]>;
  genres!: Observable<Genre[]>;
  searchTerm: string = '';
  selectedGenre: string | null = null;

  constructor(private store: Store<AppState>,
              private genreService:GenreService) {}

  ngOnInit(): void {
    this.genres = this.genreService.getAllGenres();
    this.store.dispatch(MovieActions.loadAllMovies());
    this.movies$ = this.store.pipe(select(state => state.movie.movies));
  }
  searchMovies(): void {
    if (this.searchTerm) {
      this.store.dispatch(MovieActions.searchMoviesByName({ name: this.searchTerm }));
    } else {
      this.store.dispatch(MovieActions.loadAllMovies());
    }
  }

  searchMoviesByGenre(): void {
    console.log(this.selectedGenre);
    if (this.selectedGenre === 'All Genre'){
      this.store.dispatch(MovieActions.loadAllMovies());
    } else if (this.selectedGenre) {
      this.store.dispatch(MovieActions.loadMovieByCategory({ category: this.selectedGenre }));
    } else{
      this.store.dispatch(MovieActions.loadAllMovies());
    }
  }

}
