import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import {PdfjsControl, PdfjsGroupControl,
  RenderEvent, RenderEventType,
  RenderQuality, ThumbnailDragMode,
  ThumbnailLayout, ViewFit
} from '@hhangular/pdfjs';



@Component({
  selector: 'app-pdf-viewer-hhangular',
  templateUrl: './pdf-viewer-hhangular.component.html',
  styleUrls: ['./pdf-viewer-hhangular.component.scss']
})

export class PdfViewerHhangularComponent implements OnInit {

  ThumbnailDragMode = ThumbnailDragMode;
  ThumbnailLayout = ThumbnailLayout;
  isNaN = isNaN;
  ViewFit = ViewFit;
  fit = ViewFit.HORIZONTAL;
  progress = 0;
  timeStart = 0;
  scale = 0.7;
  editMode = false;

  quality: RenderQuality = 2;
  textEnable = false;

  pdfjsGroupControl: PdfjsGroupControl = new PdfjsGroupControl();
  pdfjsControl: PdfjsControl = new PdfjsControl();


  @Output() changedPage = new EventEmitter<number>();


  constructor() { }

  ngOnInit():void {
     this.pdfjsControl.load('assets/test.pdf', true);
     this.pdfjsGroupControl.selectControl(this.pdfjsControl);
     //this.pdfjsGroupControl.selectNext();
      //this.pdfjsGroupControl.selectLast();
      /*console.log(this.pdfjsGroupControl.getSelectedPageIndex());
      console.log("selected index 2222: "+ this.pdfjsControl.selectedIndex$.getValue());*/
      this.pdfjsControl.selectedIndex$.subscribe(number=>{
        this.changedPage.emit(number);
        console.log("selected page number: "+ number);

      });
     //console.log(this.pdfjsGroupControl.getPageNumber());

  }

  renderHandler($event: RenderEvent) {
    this.progress = ($event.page / $event.pages) * 100;
    if ($event.type === RenderEventType.START) {
      this.timeStart = $event.time;
    } else if ($event.type === RenderEventType.END) {
      const time = $event.time - this.timeStart;
      const s = Math.trunc(time / 1000);
      const ms = time - s * 1000;
      console.log(`Render ${$event.pages} pages in ${s}s ${ms}ms`);
    }
  }


  changePageHandler(event: Event) {
    console.log(this.pdfjsGroupControl.selectPageIndex(parseInt((event.target as HTMLInputElement).value, 10)))
    ;
  }
}
