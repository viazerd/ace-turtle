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

  height = 20;// Height of Inner Box
  width = 20;// width of Inner Box
  dragPosition:Point = {x: 0, y: 180};

  constructor(private _sanitizer: DomSanitizer) { }

 get updatePos(){ // Updating the Position Dynamically
    console.log(this.dragPosition)
    this.innerBox.setFreeDragPosition
    return this._sanitizer.bypassSecurityTrustStyle(`translateX(${this.dragPosition.x}) translateY(${this.dragPosition.y})`);
  }

  getPos(){//Checking for Updated Position
    this.updatePos
  }

  dragEnd(event) {//Updating coordinates after drand and drop is finished
    let cords = event.source.getFreeDragPosition()
    this.dragPosition.x = cords.x
    this.dragPosition.y = cords.y
    console.log(cords.x);
  }



}
