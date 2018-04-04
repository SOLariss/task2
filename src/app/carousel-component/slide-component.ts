import { Component, Input, TemplateRef, OnInit, OnDestroy, HostBinding } from '@angular/core';
import {CarouselComponent} from './carousel-component';

@Component({
  selector: "slide",
  templateUrl: "./slide-component.html"
})
export class SlideComponent implements OnInit, OnDestroy {
  @Input() content: string | TemplateRef<any>;
  @Input() image: string;
  @Input() title: string;
  @HostBinding('class.active') active :boolean = false;
  isTemplate() {
    return this.content instanceof TemplateRef;
  }  
  setActive(isActive) {
    this.active = isActive;
  }
  constructor(private carousel: CarouselComponent) {
  }
  ngOnInit(): void {    
    this.carousel.addSlide(this);
  }
  ngOnDestroy(): void {
    this.carousel.removeSlide(this);
  }  
  
}