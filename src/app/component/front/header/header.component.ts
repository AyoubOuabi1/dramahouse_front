import { Component, HostListener } from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isScrolled = false;
  constructor(private router : Router) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Detect if user has scrolled down
    if (window.pageYOffset > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  login() {
    this.router.navigate(['/auth/login']);
  }
  checkIfUserIsLoggedIn() {
    return localStorage.getItem('user') !== null;
  }
}
