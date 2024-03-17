import { Genre } from "./genre";
import { Person } from "./person";

export interface MovieRequest {
    title: string;
    description: string;
    releaseDate: string;
    language: string;
    duration: number;
    trailerUrl: string;
  videoFile: string;
  posterFile: string;
  coverFile: string;
    genres: number[];
    cast: number[];
  directorId: number;
}
