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
  scrollElementsOffsetLeft: number;
  constructor() { }

  ngOnInit() {

  }


  ngAfterViewInit() {
      
  }


  ngAfterContentInit(){
    if((this.contentChild.nativeElement as HTMLElement).scrollWidth > (this.contentChild.nativeElement as HTMLElement).clientWidth ) {
      this.showRightButton = true;
       if(this.leftButton) {
          this.scrollElementsOffsetLeft = (this.leftButton.nativeElement as HTMLElement).offsetWidth + (this.contentChild.nativeElement as HTMLElement).offsetLeft;
        }
    }
  }

  scrollLeft() {
    this.showRightButton = true;
    (this.contentChild.nativeElement as HTMLElement).scrollLeft -= this.getWidthToScroll();
    console.log(this.getWidthToScroll(), (this.contentChild.nativeElement as HTMLElement).scrollLeft)
    if((this.contentChild.nativeElement as HTMLElement).scrollLeft === 0 ) {
      this.showRightButton = true;
      this.showLeftButton = false;
    }


  }

  scrollRight() {
    this.showLeftButton = true;
    (this.contentChild.nativeElement as HTMLElement).scrollLeft += this.getWidthToScroll();
        if((this.contentChild.nativeElement as HTMLElement).scrollLeft +(this.contentChild.nativeElement as HTMLElement).clientWidth ===
    (this.contentChild.nativeElement as HTMLElement).scrollWidth) {
      this.showRightButton = false;
      this.showLeftButton = true;
    }
  }

  getWidthToScroll(): number {
   const scrollElement = (this.contentChild.nativeElement as HTMLElement);
   const children =  scrollElement.children;
   const childrenLength =  children.length;
   let width = 0;
    for(let i = 0; i < childrenLength; i++) {
      // checks element is fully visible and calculates the width to scroll
      if(children.item(i).getBoundingClientRect().left > this.scrollElementsOffsetLeft && 
          children.item(i).getBoundingClientRect().right <= scrollElement.getBoundingClientRect().right) {
        width += (children.item(i) as HTMLElement).offsetWidth;
      }
   }
   return width;
  }

}