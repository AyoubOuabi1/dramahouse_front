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
  filteredMovies: Movie[] = [];
  genres!: Observable<Genre[]>; // Assuming you have genres available
  searchTerm: string = '';
  selectedGenre: number | null = null;

  constructor(private store: Store<AppState>,
              private genreService:GenreService) {}

  ngOnInit(): void {
    this.genres = this.genreService.getAllGenres();
    this.store.dispatch(MovieActions.loadAllMovies());
    this.movies$ = this.store.pipe(select(state => state.movie.movies));
  }


}
