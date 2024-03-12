import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { ReactiveFormsModule } from '@angular/forms';
import { userReducer } from './state/user/user-reducer';
import { UserEffect } from './state/user/user-effect';
import { NavbarComponent } from './component/dashboard/navbar/navbar.component';
import { LatestMoviesComponent } from './component/front/latest-movies/latest-movies.component';
import { AllmoviesComponent } from './component/front/allmovies/allmovies.component';

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
    NavbarComponent,
    LatestMoviesComponent,
    AllmoviesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    StoreModule.forRoot({user: userReducer}, {}),
    EffectsModule.forRoot([UserEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
