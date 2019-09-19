import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PdfjsModule} from '@hhangular/pdfjs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // =============== WORKER ===============
    PdfjsModule.config({
      workerSrc: 'assets/pdf.worker.min.js',
      cMapUrl: 'assets/cmaps/',
      cMapPacked: true
    })
  ],
  exports: [
    PdfjsModule
  ]
})
export class SharedModule { }
