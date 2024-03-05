import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule, OwlOptions} from "ngx-owl-carousel-o";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-movie-carousel',
  imports: [CommonModule, CarouselModule],
  templateUrl: './movie-carousel.component.html',
  standalone: true,
  styleUrls: ['./movie-carousel.component.css']
})
export class MovieCarouselComponent {

  @Input() moviesList!: any[];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    margin: 50,

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }

}
