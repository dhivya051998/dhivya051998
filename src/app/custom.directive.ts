import { Directive,ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private ele:ElementRef) { }
  @HostListener ('mouseenter') onMouseEvent(){
    this.ele.nativeElement.style.backgroundColor="#465986";
  }

  @HostListener ('mouseleave') onMouseEvent1(){
    this.ele.nativeElement.style.backgroundColor=null;
  }

}
