import { Component } from '@angular/core';
import { Movie } from 'src/app/entities/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  comedyMovies: Movie[] = [];
  allMovies: Movie[] = [];
}
