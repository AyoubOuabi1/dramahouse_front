import {Genre} from "./genre";
import {Person} from "./person";

export interface Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: string;
  language: string;
  duration: number;
  trailerUrl: string;
  videoUrl: string;
  posterUrl: string;
  coverUrl: string;
  genres: Genre[];
  cast: Person[];
  director: Person;
}




