import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topmovie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topmovie.component.html',
  styleUrls: ['./topmovie.component.css']
})
export class TopmovieComponent {
  constructor() { }

}
