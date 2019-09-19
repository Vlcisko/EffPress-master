import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  pdfjsGroupControl: PdfjsGroupControl = new PdfjsGroupControl();
  pdfjsControl: PdfjsControl = new PdfjsControl();

  ngOnInit():void {
     this.pdfjsControl.load('assets/test.pdf', true);
     this.pdfjsGroupControl.selectControl(this.pdfjsControl);
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

}
