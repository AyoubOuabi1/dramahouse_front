import {Component, OnInit} from '@angular/core';
import {debounceTime, Observable, Subject} from "rxjs";
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
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  totalPages = 0;
  searchTermm = new Subject<string>();

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
    });
    this.searchTermm.pipe(
      debounceTime(400)
    ).subscribe(searchTerm => {
      if (searchTerm) {
        this.store.dispatch(MovieActions.searchMoviesByName({ name: searchTerm }));
      } else {
        this.store.dispatch(MovieActions.loadAllMovies());
      }
    });
  }
  searchMovies(event: any): void {
    this.searchTermm.next(event.target.value);
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
