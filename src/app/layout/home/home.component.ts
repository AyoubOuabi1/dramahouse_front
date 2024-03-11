import { Component } from '@angular/core';
import { Movie } from 'src/app/entities/movie';
import {Genre} from "../../entities/genre";
import {Person} from "../../entities/person";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  comedyMovies: Movie[] = [];
  allMovies: Movie[] = [];
  dummyGenres: Genre[] = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Comedy' },
  ];
  dummyPerson: Person = {
    id: 1,
    name: 'John Doe',
    imageUrl: 'https://example.com/image.jpg',
    biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    nationality: 'American',
    birthDate: '1990-01-01',
  };
  dummyMovies: Movie[] = [
    {
      id: 1,
      title: 'Movie 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      releaseDate: '2022-01-01',
      language: 'English',
      duration: 120,
      trailerUrl: 'https://example.com/trailer1',
      videoUrl: 'https://example.com/video1',
      posterUrl: 'https://example.com/poster1.jpg',
      coverUrl: 'https://example.com/cover1.jpg',
      genres: [this.dummyGenres[0]],
      cast: [this.dummyPerson],
      director: this.dummyPerson,
    },{
      id: 1,
      title: 'Movie 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      releaseDate: '2022-01-01',
      language: 'English',
      duration: 120,
      trailerUrl: 'https://example.com/trailer1',
      videoUrl: 'https://example.com/video1',
      posterUrl: 'https://example.com/poster1.jpg',
      coverUrl: 'https://example.com/cover1.jpg',
      genres: [this.dummyGenres[0]],
      cast: [this.dummyPerson],
      director: this.dummyPerson,
    },{
      id: 1,
      title: 'Movie 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      releaseDate: '2022-01-01',
      language: 'English',
      duration: 120,
      trailerUrl: 'https://example.com/trailer1',
      videoUrl: 'https://example.com/video1',
      posterUrl: 'https://example.com/poster1.jpg',
      coverUrl: 'https://example.com/cover1.jpg',
      genres: [this.dummyGenres[0]],
      cast: [this.dummyPerson],
      director: this.dummyPerson,
    },{
      id: 1,
      title: 'Movie 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      releaseDate: '2022-01-01',
      language: 'English',
      duration: 120,
      trailerUrl: 'https://example.com/trailer1',
      videoUrl: 'https://example.com/video1',
      posterUrl: 'https://example.com/poster1.jpg',
      coverUrl: 'https://example.com/cover1.jpg',
      genres: [this.dummyGenres[0]],
      cast: [this.dummyPerson],
      director: this.dummyPerson,
    },{
      id: 1,
      title: 'Movie 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      releaseDate: '2022-01-01',
      language: 'English',
      duration: 120,
      trailerUrl: 'https://example.com/trailer1',
      videoUrl: 'https://example.com/video1',
      posterUrl: 'https://example.com/poster1.jpg',
      coverUrl: 'https://example.com/cover1.jpg',
      genres: [this.dummyGenres[0]],
      cast: [this.dummyPerson],
      director: this.dummyPerson,
    },{
      id: 1,
      title: 'Movie 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      releaseDate: '2022-01-01',
      language: 'English',
      duration: 120,
      trailerUrl: 'https://example.com/trailer1',
      videoUrl: 'https://example.com/video1',
      posterUrl: 'https://example.com/poster1.jpg',
      coverUrl: 'https://example.com/cover1.jpg',
      genres: [this.dummyGenres[0]],
      cast: [this.dummyPerson],
      director: this.dummyPerson,
    },{
      id: 1,
      title: 'Movie 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      releaseDate: '2022-01-01',
      language: 'English',
      duration: 120,
      trailerUrl: 'https://example.com/trailer1',
      videoUrl: 'https://example.com/video1',
      posterUrl: 'https://example.com/poster1.jpg',
      coverUrl: 'https://example.com/cover1.jpg',
      genres: [this.dummyGenres[0]],
      cast: [this.dummyPerson],
      director: this.dummyPerson,
    },{
      id: 1,
      title: 'Movie 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      releaseDate: '2022-01-01',
      language: 'English',
      duration: 120,
      trailerUrl: 'https://example.com/trailer1',
      videoUrl: 'https://example.com/video1',
      posterUrl: 'https://example.com/poster1.jpg',
      coverUrl: 'https://example.com/cover1.jpg',
      genres: [this.dummyGenres[0]],
      cast: [this.dummyPerson],
      director: this.dummyPerson,
    },{
      id: 1,
      title: 'Movie 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      releaseDate: '2022-01-01',
      language: 'English',
      duration: 120,
      trailerUrl: 'https://example.com/trailer1',
      videoUrl: 'https://example.com/video1',
      posterUrl: 'https://example.com/poster1.jpg',
      coverUrl: 'https://example.com/cover1.jpg',
      genres: [this.dummyGenres[0]],
      cast: [this.dummyPerson],
      director: this.dummyPerson,
    },{
      id: 1,
      title: 'Movie 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      releaseDate: '2022-01-01',
      language: 'English',
      duration: 120,
      trailerUrl: 'https://example.com/trailer1',
      videoUrl: 'https://example.com/video1',
      posterUrl: 'https://example.com/poster1.jpg',
      coverUrl: 'https://example.com/cover1.jpg',
      genres: [this.dummyGenres[0]],
      cast: [this.dummyPerson],
      director: this.dummyPerson,
    },{
      id: 1,
      title: 'Movie 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      releaseDate: '2022-01-01',
      language: 'English',
      duration: 120,
      trailerUrl: 'https://example.com/trailer1',
      videoUrl: 'https://example.com/video1',
      posterUrl: 'https://example.com/poster1.jpg',
      coverUrl: 'https://example.com/cover1.jpg',
      genres: [this.dummyGenres[0]],
      cast: [this.dummyPerson],
      director: this.dummyPerson,
    }
  ]
}
