import { Component, OnInit, ContentChild, AfterContentInit, ElementRef, AfterViewChecked, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-arrow-scroller',
  templateUrl: './arrow-scroller.component.html',
  styleUrls: ['./arrow-scroller.component.css']
})
export class ArrowScrollerComponent implements OnInit, AfterContentInit, AfterViewInit {
  @ContentChild('scrollableContent', { read: ElementRef }) contentChild: ElementRef;
  showRightButton = false;
  showLeftButton = false;
  rightButtonCSS: any;
  leftButtonCSS: any;
  @ViewChild('leftButton', {read: ElementRef}) leftButton: ElementRef;

  constructor() { }

  ngOnInit() {

  }


  ngAfterViewInit() {
      
  }


  ngAfterContentInit(){
    if((this.contentChild.nativeElement as HTMLElement).scrollWidth > (this.contentChild.nativeElement as HTMLElement).clientWidth ) {
      this.showLeftButton = true;
    }
    const leftButtonWidth = (this.leftButton.nativeElement as HTMLElement).offsetWidth;
    const buttonTopPosition = ((this.contentChild.nativeElement as HTMLElement).offsetHeight)/2;
    const leftPosition = ((this.contentChild.nativeElement as HTMLElement).offsetWidth);
    this.rightButtonCSS = { top: buttonTopPosition+ 'px', left: (leftPosition - leftButtonWidth) + 'px'};
    this.leftButtonCSS =  { top: buttonTopPosition+ 'px'};
  }

  scrollLeft() {
    (this.contentChild.nativeElement as HTMLElement).scrollLeft -= 20;
    this.showRightButton = true;
    if((this.contentChild.nativeElement as HTMLElement).scrollLeft === 0 ) {
      this.showRightButton = true;
      this.showLeftButton = false;
    }
  }

  scrollRight() {
    (this.contentChild.nativeElement as HTMLElement).scrollLeft += 20;
    if((this.contentChild.nativeElement as HTMLElement).scrollLeft +(this.contentChild.nativeElement as HTMLElement).clientWidth ===
    (this.contentChild.nativeElement as HTMLElement).scrollWidth) {
      this.showRightButton = false;
      this.showLeftButton = true;
    }
  }

}