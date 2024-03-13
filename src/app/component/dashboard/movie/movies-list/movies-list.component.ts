import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Movie} from "../../../../entities/movie";
import {Genre} from "../../../../entities/genre";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../state/app-state";
import {GenreService} from "../../../../service/genre/genre.service";
import {Router} from "@angular/router";
import * as MovieActions from "../../../../state/movie/movie-action";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit{

  movies$!: Observable<Movie[]>;
  genres!: Observable<Genre[]>;
  searchTerm: string = '';
  selectedGenre: string | null = null;
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  totalPages = 0;
  constructor(private store: Store<AppState>,
              private genreService:GenreService,
              private router: Router) {}

  ngOnInit(): void {
    this.genres = this.genreService.getAllGenres();
    this.store.dispatch(MovieActions.loadAllMovies());
    this.movies$ = this.store.pipe(select(state => state.movie.movies));
    this.movies$.subscribe(movies => {
      this.totalItems = movies.length;
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    });  }
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

  getPaginatedMovies(): Observable<Movie[]> {
    return this.movies$.pipe(
      map(movies => movies.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage))
    );
  }

  nextPage(): void {
    this.currentPage++;
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

}
