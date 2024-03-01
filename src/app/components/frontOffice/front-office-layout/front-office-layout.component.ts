import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-front-office-layout',
  standalone: true,
    imports: [CommonModule, FooterComponent, HeaderComponent, HomeComponent],
  templateUrl: './front-office-layout.component.html',
  styleUrls: ['./front-office-layout.component.css']
})
export class FrontOfficeLayoutComponent {

}
