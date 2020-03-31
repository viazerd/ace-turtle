import { Component,ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { DragRef } from '@angular/cdk/drag-drop';
import { Point } from '@angular/cdk/drag-drop/drag-ref';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("innerbox",{static:true}) innerBox: DragRef;
  @ViewChild("innerbox",{static:true}) innerbox: ElementRef;

  height = 20;
  width = 20;
  dragPosition:Point = {x: 0, y: 180};

  constructor(private _sanitizer: DomSanitizer) { }

 get updatePos(){
    console.log(this.dragPosition)
    this.innerBox.setFreeDragPosition
    return this._sanitizer.bypassSecurityTrustStyle(`translateX(${this.dragPosition.x}) translateY(${this.dragPosition.y})`);
  }

  getPos(){
    this.updatePos
  }

  dragEnd(event) {
    let cords = event.source.getFreeDragPosition()
    this.dragPosition.x = cords.x
    this.dragPosition.y = cords.y
    console.log(cords.x);
  }



}
