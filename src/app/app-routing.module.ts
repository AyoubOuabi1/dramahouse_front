import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { AuthComponent } from './layout/auth/auth.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { RegisterFormComponent } from './component/register-form/register-form.component';
import {LatestMoviesComponent} from "./component/front/latest-movies/latest-movies.component";
import {MoviesGalleryComponent} from "./component/front/movies-gallery/movies-gallery.component";
import {MovieDetailComponent} from "./component/front/movie-detail/movie-detail.component";
import {MoviesListComponent} from "./component/dashboard/movie/movies-list/movies-list.component";
import {WatchListComponent} from "./component/front/watch-list/watch-list.component";
import {checkLoginGuard} from "./guard/check-login.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path: '',
        component: LatestMoviesComponent
      },
      {
        path: 'gallery',
        component: MoviesGalleryComponent
      },
      {
        path: 'watch-list',
        component: WatchListComponent,
        canActivate : [checkLoginGuard]
      },
      {
        path: 'movieDetail/:id',
        component: MovieDetailComponent
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'movies',
        component: MoviesListComponent
      }
    ]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginFormComponent
      },
      {
        path: 'register',
        component: RegisterFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
