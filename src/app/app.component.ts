import { Component, TemplateRef, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import {CarouselComponent} from './carousel-component/carousel-component';
import {SlideComponent} from './carousel-component/slide-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  entryComponents: [SlideComponent, CarouselComponent]
})
export class AppComponent {

  @ViewChild('kittenContentTpl') kittenContentTpl;
  items = [
    {
      img: "https://pre00.deviantart.net/d6b1/th/pre/f/2012/278/2/b/she__s_had_enough__by_wraithdt-d5gx3xh.jpg",
      title: "Star Wars",
      content: "Moff civil war"
    },
    {
      img: "https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?w=640&ssl=1",
      title: "Kitten",
      content: this.kittenContentTpl
    }
  ];
  private isViewInitialized: boolean = false;
  @ViewChild('carouselTpl', {read: ViewContainerRef}) carouselTpl:ViewContainerRef;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterContentInit() {  
    const factory =this._componentFactoryResolver.resolveComponentFactory(SlideComponent);
      debugger;
      this.items.forEach((item) => {
        const componentRef =  this.carouselTpl.createComponent(factory);
        componentRef.instance.image = item.img;
        componentRef.instance.title = item.title;
        componentRef.instance.content = item.content;
      });
    }
  
}
