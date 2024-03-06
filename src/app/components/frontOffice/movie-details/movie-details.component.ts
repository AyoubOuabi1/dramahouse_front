import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Movie} from "../../../models/movie";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  movie!: Movie;

  constructor(
    private route: ActivatedRoute,
    //private movieService: MovieService,
    //private modalService: NgbModal // Inject NgbModal service
  ) { }
}
