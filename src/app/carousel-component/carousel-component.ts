import {
    AfterViewInit, Component, EventEmitter, HostListener, Input, OnDestroy, Output, Renderer2, TemplateRef,
    ContentChildren, QueryList, HostBinding
  } from '@angular/core';
  import {SlideComponent} from './slide-component';
  
  @Component({
      selector: "carousel",
      templateUrl: "./carousel-component.html"
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
  