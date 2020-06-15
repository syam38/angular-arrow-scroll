import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ArrowScrollerComponent } from './arrow-scroller/arrow-scroller.component';

@NgModule({
  imports:      [ BrowserModule, CommonModule],
  declarations: [ AppComponent, ArrowScrollerComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
