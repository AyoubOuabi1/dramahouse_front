import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbCarousel, NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import {interval} from "rxjs";

@Component({
  selector: 'app-movie-carousel',
  standalone: true,
  imports: [CommonModule, NgbCarousel],
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.css']
})
export class MovieCarouselComponent {
  @Input() moviesList!: any[];

  constructor(protected config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true; // Enable continuous looping
    config.keyboard = false; // Disable keyboard navigation (optional)
    config.showNavigationArrows = true; // Enable navigation arrows
    config.showNavigationIndicators = true; // Enable navigation dots
  }

  protected readonly interval = interval;
}
