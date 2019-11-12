import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input() ratio = 1;
  initialTop = 0;

  constructor(private eleRef: ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.ratio)) + 'px';
  }
}
