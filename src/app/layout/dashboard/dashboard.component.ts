import { Store } from '@ngrx/store';
import { AuthResponse } from 'src/app/entities/auth-response';
import { TokenRes } from 'src/app/entities/token-res';
import { AuthenticatonServiceService } from 'src/app/service/auth/authenticaton-service.service';
import { AppState } from 'src/app/state/app-state';
import * as UserActions from 'src/app/state/user/user-action'
import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('dashboard') dashboard!: ElementRef;
  @ViewChild('menuToggle') menuToggle!: ElementRef;
  dropdownToggles!: ElementRef[];

  constructor(private renderer: Renderer2,
              private router:Router) {}

  ngAfterViewInit() {
    this.dropdownToggles = this.dashboard.nativeElement.querySelectorAll('.dashboard-nav-dropdown-toggle');
    this.dropdownToggles.forEach(toggle => {
      toggle.nativeElement.addEventListener('click', this.toggleDropdown);
    });
    this.menuToggle.nativeElement.addEventListener('click', this.toggleMenu);
  }

  toggleDropdown(event: { target: { closest: (arg0: string) => any; }; }) {
    const dropdown = event.target.closest('.dashboard-nav-dropdown');
    this.renderer.addClass(dropdown, 'show');
    dropdown.querySelectorAll('.dashboard-nav-dropdown').forEach((d: any) => {
      this.renderer.removeClass(d, 'show');
    });
    dropdown.parentElement.childNodes.forEach((node: any) => {
      if (node !== dropdown) {
        this.renderer.removeClass(node, 'show');
      }
    });
  }

  toggleMenu() {
   /* if (window.matchMedia("(max-width: 990px)").matches) {
      this.renderer.toggleClass(this.dashboard.nativeElement, 'mobile-show');
    } else {
      this.renderer.toggleClass(this.dashboard.nativeElement, 'dashboard-compact');
    }*/
  }

  logOut(){
    localStorage.removeItem('user');
     this.router.navigate(['/']);
  }
  toProfile(){
    this.router.navigate(['/dashboard/profile']);

  }

  toGenres(){
    this.router.navigate(['/dashboard/genres']);
  }

  toMovies(){
    this.router.navigate(['/dashboard/movies']);
  }

  toUsers(){
    this.router.navigate(['/dashboard/users'])
  }
  toActors(){
    this.router.navigate(['/dashboard/persons'])
  }



  toHome(){
    this.router.navigate(['/']);
  }
}
