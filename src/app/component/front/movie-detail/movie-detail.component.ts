import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app-state';
import { Movie } from '../../../entities/movie';
import * as MovieActions from '../../../state/movie/movie-action';
import { Observable } from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie$!: Observable<Movie | null>;
  moviesList$!: Observable<Movie[]>;
  chekcIfMovieExistsInWatchlist$!: Observable<boolean>;
  firstGenre!: string;
  showMovieVideo!: boolean;
  addedToWatchList: boolean = false;
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.showMovieVideo = false;
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.store.dispatch(MovieActions.loadMovieById({ id }));
      this.movie$ = this.store.select(state => state.movie.selectedMovie);
      this.movie$.subscribe(
        movie=>{
          if(movie){
            this.firstGenre = movie.genres[0].name;
            this.store.dispatch(MovieActions.loadMovieByCategory({ category: this.firstGenre }));
          }
        }

      );
      this.moviesList$ = this.store.select(state => state.movie.movies);
      this.store.dispatch(MovieActions.checkIfMovieExistsInWatchlist({movieId: id}));
      this.store.select(state => state.movie.exists).subscribe(
        check=>{
          console.log(check)
          this.addedToWatchList=check;
        }
      )
    });
  }
  watchNow(movieId: number) {
    this.router.navigate(['/movieDetail', movieId]);
  }
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  showMovieDetail() {
    this.showMovieVideo = true
  }
  hideMovieDetail() {
    this.showMovieVideo = false
  }

  addToWatchList(movieId : number) {
    this.store.dispatch(MovieActions.addMovieToWatchlist({movieId}));
    this.addedToWatchList  = true;

  }

  removeFromWatchList(movieId: number) {
    this.store.dispatch(MovieActions.deleteMovieFromWatchlist({movieId}));
    this.addedToWatchList = false;
  }
}
