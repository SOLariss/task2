import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CarouselComponent} from './carousel-component/carousel-component';
import {SlideComponent} from './carousel-component/slide-component';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    CarouselComponent,
    SlideComponent,
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
