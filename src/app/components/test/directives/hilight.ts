const DEFAULT_HILIGHT_COLOR = 'yellow';

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHilight]',
  standalone: true
})
export class Hilight {
  @Input() hilightColor: string = DEFAULT_HILIGHT_COLOR;

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.hilightColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }


  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
