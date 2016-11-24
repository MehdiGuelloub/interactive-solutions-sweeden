import { Component, Input, ElementRef, AfterViewInit, AfterContentInit} from '@angular/core';
/*declare var jQuery: any;*/
import * as jQuery from 'jquery';
import 'slick-carousel/slick/slick';

@Component({
    selector: 'is-slick-slider',
    template: `<ng-content></ng-content>`
})
export class SlickSliderComponent implements AfterContentInit{
    @Input() options: any;

    $element: any;

    defaultOptions: any = {
      infinite: true,
      centerMode: true,
      centerPadding: '160px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    };

    constructor(private el: ElementRef) {
    }

    ngAfterContentInit() {
        for (var key in this.options) {
            this.defaultOptions[key] = this.options[key];
        }

        this.$element = jQuery(this.el.nativeElement).slick(this.defaultOptions);
    }
}