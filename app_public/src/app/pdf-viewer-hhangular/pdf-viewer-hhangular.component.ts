import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Page } from './../page';
import { Iteratorr } from './../iterator/Iterator';

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
  scale = 0.8;
  editMode = false;

  scalePercentage = 100;

  quality: RenderQuality = 2;
  textEnable = false;


  @Input() pdfControls: any;


  @Output() changedPage = new EventEmitter<number>();


  pdfjsGroupControl = new PdfjsGroupControl();
  pageIterator: Iteratorr<Page>;
  pdfjsControl = new PdfjsControl();


  constructor() {}

  ngOnInit(): void {

    this.pdfjsGroupControl = this.pdfControls.pdfjsGroupControl;
    this.pdfjsControl = this.pdfControls.pdfjsControl;
    this.pageIterator = this.pdfControls.pageIterator;

     //this.pdfjsControl.load('assets/test.pdf', true);
     //this.pdfjsGroupControl.selectNext();
      //this.pdfjsGroupControl.selectLast();
      /*console.log(this.pdfjsGroupControl.getSelectedPageIndex());
      console.log("selected index 2222: "+ this.pdfjsControl.selectedIndex$.getValue());*/




    this.pdfjsControl.selectedIndex$.subscribe((number: number) => {
      if(number !== undefined) {
        number++;
        this.changedPage.emit(number);
        console.log("selected page number: "+ number + " id: " + window.turingUserId);
      }
    });
     //console.log(this.pdfjsGroupControl.getPageNumber());

  }

  scalePlus(){
    this.scalePercentage += 10;
    this.scale += 0.1;
  }

  scaleMinus(){
    this.scalePercentage -= 10;
    this.scale -= 0.1;
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
