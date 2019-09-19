import { Component, OnInit } from '@angular/core';
import {
  PDFJSStatic,
  PDFPageViewport,
  PDFRenderTask,
  PDFDocumentProxy,
  PDFPageProxy
} from 'pdfjs-dist';

import {
  PDFWorker
} from 'pdfjs-dist/build/pdf';

/*const PDFJS: PDFJSStatic = require('pdfjs-dist');

import * as pdfjsLib from 'pdfjs-dist/build/pdf';*/

const pdfjsLib = require('pdfjs-dist/build/pdf');
//pdfjsLib.GlobalWorkerOptions.workerSrc = './assets/pdf.worker.min.js'
pdfjsLib.GlobalWorkerOptions.workerSrc = './assets/pdf.worker.min.js'

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit {

  constructor() { }

  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  errorMessage: string;

  totalPages: number;
  pageNumber: number = 1;

  pdf: PDFDocumentProxy;
  canvas: HTMLCanvasElement;

  async ngOnInit(): Promise<void> {
    pdfjsLib.disableWorker = true;
    try {
      await this.loadPDFDocument();
    } catch (error) {
      this.errorMessage = error;
      console.log(error);
    }
  }

  private async loadPDFDocument(): Promise<void>{
    this.canvas = this.getCanvasElementById('main-canvas');
    this.pdf = await pdfjsLib.getDocument('./assets/test.pdf');
    this.totalPages = this.pdf.numPages;
    return await this.generateView(this.pageNumber, this.canvas);
  }

  private getCanvasElementById (id: string): HTMLCanvasElement {
    const canvas = document.getElementById(id);
    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error(`"${id}" is not a HTMLCanvasElement. Make sure a <canvas id="${id}""> element is present in the document.`);
    }
    return canvas;
}
  private async generateView(pageNumber: number, canvas: HTMLCanvasElement): Promise<void> {
    const page: PDFPageProxy = await this.pdf.getPage(pageNumber);
    const scale = 1;
    const viewport: PDFPageViewport = page.getViewport({
      scale: scale
    });
    this.canvas.height = viewport.height;
    this.canvas.width = viewport.width;
    await this.createRenderTask(page, canvas, viewport);
    this.setDisplayValues(this.canvas);
  }

  private createRenderTask(
    page: PDFPageProxy,
    canvas: HTMLCanvasElement,
    viewport: PDFPageViewport
  ): PDFRenderTask {
    const context: CanvasRenderingContext2D = canvas.getContext('2d');
    const task: PDFRenderTask = page.render({
      canvasContext: context,
      viewport: viewport,
    });
    return task;
  }

  private setDisplayValues(canvas: HTMLCanvasElement): void {
    this.imgWidth = canvas.width;
    this.imgHeight = canvas.height;
    this.imgSrc = canvas.toDataURL();
  }

  public changePagePrevious() {
    this.pageNumber = this.pageNumber - 1;
    if (this.pageNumber === 0) {
      alert('firstPage');
      this.pageNumber = 1;
    } else {
      this.generateView(this.pageNumber, this.canvas);
    }
  }

  public changePageNext() {
    this.pageNumber = this.pageNumber + 1;

    if (this.pageNumber >= this.totalPages) {
      this.pageNumber = this.totalPages;
      alert('LastPage');
    } else {
      this.generateView(this.pageNumber, this.canvas);
    }
  }
}
