import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {FrontOfficeLayoutComponent} from "./components/frontOffice/front-office-layout/front-office-layout.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, FrontOfficeLayoutComponent, RouterOutlet,],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dramahouse';

}
