import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopmovieComponent} from "../topmovie/topmovie.component";
import {MovieCarouselComponent} from "../movie-carousel/movie-carousel.component";
import { Movie } from 'src/app/models/movie';
import {MoviesServiceService} from "../../../services/movies-service.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TopmovieComponent, MovieCarouselComponent,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MoviesServiceService],
})
export class HomeComponent implements OnInit{
  comedyMovies: Movie[] = [];
  allMovies: Movie[] = [];

  constructor(private moviesService: MoviesServiceService) {}

  ngOnInit(): void {
    // Fetch comedy movies
    this.moviesService.getMoviesByGenre('comedy').subscribe(movies => {
      this.comedyMovies = movies;
    });

    // Fetch all movies
    this.moviesService.getAllMovies().subscribe(movies => {
      this.allMovies = movies;
    });
  }

}
