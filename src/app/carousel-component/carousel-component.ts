import {
    AfterViewInit, Component, EventEmitter, HostListener, Input, OnDestroy, Output, Renderer2, TemplateRef,
    ContentChildren, QueryList
  } from '@angular/core';
  import {SlideComponent} from './slide-component';
  
  @Component({
      selector: "carousel",
    template: `<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">      
    </ol>
    <div class="carousel-inner" *ngFor="let slide of slides"> {{slide}}
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>`
  })
  export class CarouselComponent {
    @Input() content: TemplateRef<any>;
    @ContentChildren(SlideComponent) slides: QueryList<SlideComponent>;
    ngAfterViewInit () {
        console.log(this.slides);
    }
  }
  