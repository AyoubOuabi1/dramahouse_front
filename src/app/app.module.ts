import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {CarouselModule} from "primeng/carousel";
import {HttpClientModule, provideHttpClient} from "@angular/common/http";


@NgModule({
  declarations: [

  ],
  imports: [
    CarouselModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    AppComponent,
    NoopAnimationsModule,
    CarouselModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient(),
  ],
})
export class AppModule { }
