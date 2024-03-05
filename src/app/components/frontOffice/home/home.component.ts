import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopmovieComponent} from "../topmovie/topmovie.component";
import {MovieCarouselComponent} from "../movie-carousel/movie-carousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TopmovieComponent, MovieCarouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  moviesList: any[] = [];

  ngOnInit(): void {
    this.moviesList = [
      { title: 'Movie 1', imageUrl: 'https://www.superherohype.com/wp-content/uploads/sites/4/2023/02/gotham-knights-poster2.jpg', description: '...' },
      { title: 'Movie 2', imageUrl: 'https://www.superherohype.com/wp-content/uploads/sites/4/2023/02/gotham-knights-poster2.jpg', description: '...' },
      { title: 'Movie 2', imageUrl: 'https://www.superherohype.com/wp-content/uploads/sites/4/2023/02/gotham-knights-poster2.jpg', description: '...' },
      { title: 'Movie 2', imageUrl: 'https://www.superherohype.com/wp-content/uploads/sites/4/2023/02/gotham-knights-poster2.jpg', description: '...' },
      { title: 'Movie 2', imageUrl: 'https://www.superherohype.com/wp-content/uploads/sites/4/2023/02/gotham-knights-poster2.jpg', description: '...' },
      { title: 'Movie 2', imageUrl: 'https://www.superherohype.com/wp-content/uploads/sites/4/2023/02/gotham-knights-poster2.jpg', description: '...' },
      { title: 'Movie 2', imageUrl: 'https://www.superherohype.com/wp-content/uploads/sites/4/2023/02/gotham-knights-poster2.jpg', description: '...' },
      { title: 'Movie 2', imageUrl: 'https://www.superherohype.com/wp-content/uploads/sites/4/2023/02/gotham-knights-poster2.jpg', description: '...' },
      { title: 'Movie 2', imageUrl: 'https://www.superherohype.com/wp-content/uploads/sites/4/2023/02/gotham-knights-poster2.jpg', description: '...' },
      { title: 'Movie 2', imageUrl: 'https://www.superherohype.com/wp-content/uploads/sites/4/2023/02/gotham-knights-poster2.jpg', description: '...' },
      { title: 'Movie 2', imageUrl: 'https://www.superherohype.com/wp-content/uploads/sites/4/2023/02/gotham-knights-poster2.jpg', description: '...' },
      { title: 'Movie 2', imageUrl: 'https://www.superherohype.com/wp-content/uploads/sites/4/2023/02/gotham-knights-poster2.jpg', description: '...' },
      { title: 'Movie 2', imageUrl: 'https://www.superherohype.com/wp-content/uploads/sites/4/2023/02/gotham-knights-poster2.jpg', description: '...' },
      { title: 'Movie 2', imageUrl: 'https://www.superherohype.com/wp-content/uploads/sites/4/2023/02/gotham-knights-poster2.jpg', description: '...' },
      { title: 'Movie 2', imageUrl: 'https://www.superherohype.com/wp-content/uploads/sites/4/2023/02/gotham-knights-poster2.jpg', description: '...' },
      { title: 'Movie 2', imageUrl: 'https://www.superherohype.com/wp-content/uploads/sites/4/2023/02/gotham-knights-poster2.jpg', description: '...' },
      { title: 'Movie 2', imageUrl: 'https://www.superherohype.com/wp-content/uploads/sites/4/2023/02/gotham-knights-poster2.jpg', description: '...' },
      { title: 'Movie 2', imageUrl: 'https://www.superherohype.com/wp-content/uploads/sites/4/2023/02/gotham-knights-poster2.jpg', description: '...' }
    ];
  }

}
