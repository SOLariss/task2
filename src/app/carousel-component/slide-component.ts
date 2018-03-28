import { Component, Input, TemplateRef, OnInit, OnDestroy, HostBinding } from '@angular/core';
import {CarouselComponent} from './carousel-component';

@Component({
  selector: "slide",
  template: `<div class="carousel-item" [class.active]="active">
        <img class="d-block w-100" src={{image}}>
        <div class="carousel-caption d-none d-md-block">
            <h3>{{title}}</h3>
            <div *ngIf="!isTemplate(); else tpl">{{ content }}</div>
            <ng-template #tpl>
                <ng-container *ngTemplateOutlet="content"></ng-container>
            </ng-template>            
        </div>
    </div>`
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