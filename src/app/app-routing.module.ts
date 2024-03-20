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
import {NewMovieComponent} from "./component/dashboard/movie/new-movie/new-movie.component";
import {SelectedMovieComponent} from "./component/dashboard/movie/selected-movie/selected-movie.component";
import {PersonsListComponent} from "./component/dashboard/person/persons-list/persons-list.component";
import {AddPersonComponent} from "./component/dashboard/person/add-person/add-person.component";
import {UnauthorizedComponent} from "./component/unauthorized/unauthorized.component";
import {checkRoleGuard} from "./guard/check-role.guard";
import {ProfilDetailComponent} from "./component/dashboard/profil-detail/profil-detail.component";
import {GenresListComponent} from "./component/dashboard/genres/genres-list/genres-list.component";
import {UsersListComponent} from "./component/dashboard/users-list/users-list.component";

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
      },
      {
        path: 'add-movie',
        component: NewMovieComponent
      },
      {
        path: 'selected-movie/:id',
        component:SelectedMovieComponent
      },
      {
        path: 'persons',
        component:PersonsListComponent
      }, {
        path: 'add-person',
        component:AddPersonComponent
      },
      {
        path: 'profile',
        component: ProfilDetailComponent

      },
      {
        path: 'genres',
        component: GenresListComponent

      },
      {
        path: 'users',
        component: UsersListComponent

      }
    ],
    canActivate : [checkLoginGuard,checkRoleGuard]

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
  },{
    path : 'unauthorized',
    component :UnauthorizedComponent,
    canActivate : [checkLoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
