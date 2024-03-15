import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../state/app-state";
import {GenreService} from "../../../service/genre/genre.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Movie} from "../../../entities/movie";
import  * as MovieActions from "../../../state/movie/movie-action";
import {WatchlistRes} from "../../../entities/watchlist-res";
@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit{
  watchList$!: Observable<WatchlistRes | null> ;
  movies! : Movie[]
  constructor(private store: Store<AppState>,
              private router: Router) {}

  ngOnInit(): void {

    this.store.dispatch(MovieActions.loadWatchlist());
    this.watchList$ = this.store.select(state => state.movie.watchlist );
    this.watchList$.subscribe(
      watchList=>{
        console.log(watchList);
        if(watchList){
          this.movies = watchList.movies;
        }
      }
    )

  }

  watchNow(movieId: number) {
    this.router.navigate(['/movieDetail', movieId]);
  }
}
