import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthComponent } from './layout/auth/auth.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { RegisterFormComponent } from './component/register-form/register-form.component';
import { TopMoviesComponent } from './component/front/top-movies/top-movies.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FooterComponent } from './component/front/footer/footer.component';
import { HeaderComponent } from './component/front/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { userReducer } from './state/user/user-reducer';
import { UserEffect } from './state/user/user-effect';
import { SidebarComponent } from './component/dashboard/sidebar/sidebar.component';
import { LatestMoviesComponent } from './component/front/latest-movies/latest-movies.component';
import {movieReducer} from "./state/movie/movie-reducer";
import {MovieEffect} from "./state/movie/movie-effect";
import { MoviesGalleryComponent } from './component/front/movies-gallery/movies-gallery.component';
import { MovieDetailComponent } from './component/front/movie-detail/movie-detail.component';
import {VgCoreModule} from "@videogular/ngx-videogular/core";
import {VgControlsModule} from "@videogular/ngx-videogular/controls";
import {VgOverlayPlayModule} from "@videogular/ngx-videogular/overlay-play";
import {VgBufferingModule} from "@videogular/ngx-videogular/buffering";
import { MoviesListComponent } from './component/dashboard/movie/movies-list/movies-list.component';
import {TokenCheckInterceptor} from "./interceptor/token-check.interceptor";
import { WatchListComponent } from './component/front/watch-list/watch-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    AuthComponent,
    LoginFormComponent,
    RegisterFormComponent,
    TopMoviesComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    LatestMoviesComponent,
    MoviesGalleryComponent,
    MovieDetailComponent,
    MoviesListComponent,
    WatchListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    StoreModule.forRoot({user: userReducer, movie: movieReducer}, {}),
    EffectsModule.forRoot([UserEffect, MovieEffect]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    FormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenCheckInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
