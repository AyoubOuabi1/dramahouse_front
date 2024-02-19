import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopmovieComponent} from "../topmovie/topmovie.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TopmovieComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
