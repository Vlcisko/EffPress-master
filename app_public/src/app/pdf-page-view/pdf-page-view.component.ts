import { Pdf } from './../pdf';
import { Page, Rating, Comment } from './../page';
import { PagesCollection } from './../iterator/pageIterator';
import { Iteratorr } from './../iterator/Iterator';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';

//import { PagesDataService } from '../pages-data.service';
import { PagePanelDataService } from '../page-panel/page-panel-data.service';
import { PdfJsonDataService } from './../pdf-json-data.service';


import {PdfjsControl, PdfjsGroupControl } from '@hhangular/pdfjs';



@Component({
  selector: 'app-pdf-page-view',
  templateUrl: './pdf-page-view.component.html',
  styleUrls: ['./pdf-page-view.component.scss']
})

export class PdfPageViewComponent implements OnInit {

  public page: Page;
  public pageIterator: Iteratorr<Page>;
  public collection: PagesCollection;

  pdfjsGroupControl = new PdfjsGroupControl();
  pdfjsControl = new PdfjsControl();


  pdfControls = {
    pdfjsGroupControl: this.pdfjsGroupControl,
    pageIterator: this.pageIterator,
    pdfjsControl: this.pdfjsControl
  };

  pdf: Pdf;



  constructor(
    private route: ActivatedRoute,
    //private pagesDataService: PagesDataService,
    private pdfJsonDataService: PdfJsonDataService,
    private pagePanelDataService: PagePanelDataService
  ) {
  }





  ngOnInit() {
    window.turingUserId = "Tomas";
    const pdfFileName: string = "psi_03_manazment-poziadaviek.pdf";
    const pathToPdfsFolder: string = "assets/lectures/";

    this.pdf = this.pdfJsonDataService.findPdfInJson(pdfFileName);


    this.collection = new PagesCollection();
    this.pageIterator = this.collection.getIterator();

    this.pdfjsControl.load(pathToPdfsFolder + pdfFileName, true).then((numPages) => {
      //ak sa pdf naslo v jsone, nacita ho
      if(this.pdf.getPdfId()){
        window.turingLectureId = this.pdf.getPdfId();

        for (let i = 0; i < this.pdf.pages.length; i++) {
          let page: Page = this.pdf.pages[i];
          if (page) {
            this.collection.addItem(page);
          }
        }

        this.page = this.pageIterator.current();
        window.turingSlideId = this.page._id;
        this.pagePanelDataService.setSubject(this.page);
      } else {
        this.pdf.setPdfId(pdfFileName + "a");
        window.turingLectureId = this.pdf.getPdfId();

        // //inicializacia iteratora
        this.initialiseIterator(numPages, this.pdf, () => {
          this.page = this.pageIterator.current();
          window.turingSlideId = this.page._id;
          this.pagePanelDataService.setSubject(this.page);
          //console.table(this.page);
        });
//*********************** ak sa v json subore s pdf nenachadza zvolene pdf (hlada sa podla nazvu pdf), vlozi nove pdf do jsonu*/
        this.pdfJsonDataService.savePdfToJson(JSON.stringify(this.pdf));
      }
    });


    this.pdfjsGroupControl.selectControl(this.pdfjsControl);

    this.pdfControls.pdfjsGroupControl = this.pdfjsGroupControl;
    this.pdfControls.pageIterator = this.pageIterator;
  }

  async initialiseIterator(numPages: number, pdf: Pdf, callback) {
    for (let i = 0; i <= numPages; i++) {
      const page: Page = new Page(i);
      if (page) {
        this.collection.addItem(page);
        pdf.addPage(page);
      }
    }
    callback();
  }


  //event zmeny page z child componentu- pdf-viewer-hhanguler
  onPageChange(newPage: number){
    this.page = this.pageIterator.getPage(newPage);
    this.pagePanelDataService.emitPage(this.page);
  }

  setPage(pageIndex: number){
    this.page = this.pageIterator.getPage(pageIndex);
    this.pagePanelDataService.emitPage(this.page);
  }
}
