import {
    AfterViewInit, Component, EventEmitter, HostListener, Input, OnDestroy, Output, Renderer2, TemplateRef,
    ContentChildren, QueryList, HostBinding
  } from '@angular/core';
  import {SlideComponent} from './slide-component';
  
  @Component({
      selector: "carousel",
    template: `<div class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators" *ngIf= "slides.length > 1">
      <li *ngFor ="let slide of slides; let i=index" [class.active] = "slide.active" (click)="selectSlide(i)"></li>      
    </ol>
    <div class="carousel-inner">
    <ng-content></ng-content>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" (click) = "previousSlide()">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" (click) = "nextSlide()">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>`
  })
  export class CarouselComponent {
    @Input() content: TemplateRef<any>;
    private slides: Array<SlideComponent> = new Array<SlideComponent>();
    private activeSlide: number;
    
    constructor(){      
    }
    addSlide (slide: SlideComponent) {
      this.slides.push(slide);
      if(this.slides.length === 1){
        slide.setActive(true);
        this.activeSlide=0;
      }
    }

    removeSlide (slide: SlideComponent) {
      let newSlides = this.slides.filter((_slide)=>{
        return slide !== _slide;
      });
      this.slides = newSlides;
    }

    previousSlide() {
      let newSlide = this.activeSlide - 1;
      if (newSlide < 0){
        newSlide = this.slides.length - 1;
      }
      this.selectSlide(newSlide);
    }

    nextSlide(){
      let newSlide = this.activeSlide + 1;
      if (newSlide >= this.slides.length){
        newSlide = 0;
      }
      this.selectSlide(newSlide);
    }

    selectSlide(num: number) {
      debugger;
      if (this.activeSlide === num) {
        return;
      }
      this.slides[this.activeSlide].setActive(false);
      this.activeSlide = num;
      this.slides[this.activeSlide].setActive(true);
    }
    
  }
  