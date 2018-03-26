import { Component, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'slide',
    // <div *ngIf="!isTemplate(); else tpl">{{ content }}</div>
    template: `<div class="carousel-item {{isActive()}}">
        <img class="d-block w-100" src={{image}}>
        <h1>{{title}}</h1>
        <ng-template #tpl>
            <ng-container *ngTemplateOutlet="content"></ng-container>
        </ng-template>
    </div>`
})
export class SlideComponent {
    @Input() content: string | TemplateRef<any>;
    @Input() image: string;
    @Input() title: '';
    private active = true;  
    isTemplate() {
        return this.content instanceof TemplateRef;
    } 
    isActive() {
        if (this.active) {
            return "active";
        }
        return "";
    }
    setActive(isActive){
        this.active = isActive;
    }
}