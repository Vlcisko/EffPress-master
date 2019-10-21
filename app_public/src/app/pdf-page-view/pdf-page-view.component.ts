import { Page } from './../page';
import { PagesCollection } from './../iterator/pageIterator';
import { Iteratorr } from './../iterator/Iterator';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap, finalize } from 'rxjs/operators';
import { PagesDataService } from '../pages-data.service';
import { PagePanelDataService } from '../page-panel/page-panel-data.service';

import { pipe, Observable } from 'rxjs';


@Component({
  selector: 'app-pdf-page-view',
  templateUrl: './pdf-page-view.component.html',
  styleUrls: ['./pdf-page-view.component.scss']
})
export class PdfPageViewComponent implements OnInit {

  public page: Page;
  private pageIterator: Iteratorr<Page>;
  public collection: PagesCollection;


  constructor(
    private route: ActivatedRoute,
    private pagesDataService: PagesDataService,
    private pagePanelDataService: PagePanelDataService
  ) {}

  ngOnInit() {
    this.pagesDataService.createPdf(3).then((response) => {
      console.log(response);
    });
    this.collection = new PagesCollection();
    this.pageIterator = this.collection.getIterator();
    //inicializacia iteratora
    this.initialiseIterator(()=>{
      this.page = this.pageIterator.current();
      this.pagePanelDataService.setSubject(this.page);
      //console.table(this.page);
    });

  }

  async initialiseIterator(callback){
    /*let page1 = await this.getPages('5d7ff1aab45e5e5ea4176aff');
    this.collection.addItem(page1);
    let page2 = await this.getPages('5d8a65cd56434b294cf26448');
    this.collection.addItem(page2);
    let page3 = await this.getPages('5d8a660656434b294cf26449');
    console.log(page3);
    this.collection.addItem(page3);*/
    let pdf = await this.getPdf('5d8b640a58dda71924bd2f95');
    pdf.pages.forEach((page)=>{
      this.collection.addItem(page);
      console.log(page);
    });
    callback();
    this.setPage(2);
  }


  //event zmeny page z child componentu- pdf-viewer-hhanguler
  onPageChange(newPage: number){
    console.log("page changed");
    this.page = this.pageIterator.setPage(newPage);
    this.pagePanelDataService.emitPage(this.page);
  }

  setPage(page: number){
    this.page = this.pageIterator.setPage(page);
    this.pagePanelDataService.emitPage(this.page);
  }

  //docasne nacitava fixne ID, bude nahradene za nacitanie vsetkych pages z daneho pdf
  //---nacitanie ID z URL
  /*
  getPages(ID: string){
    this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) => {
        //let id = params.get('pageId');
        let id = ID;
        return this.pagesDataService.getPageById(id);
      })
    )
    .subscribe((page: Page) => {
      //this.pagePanelDataService.emitPage(this.page);

      this.collection.addItem(page);
      console.log(page);
      //console.table(this.pageIterator.current());
      //this.pageIterator.next();
      //console.table(this.pageIterator.current());
    }, err => {
      console.log(err);
    });
  }*/
  async getPages(ID: string){
    let id = ID;
    return await this.pagesDataService.getPageById(id);
  }

  async getPdf(ID: string){
    let id = ID;
    return await this.pagesDataService.getPdfById(id);
  }

}
