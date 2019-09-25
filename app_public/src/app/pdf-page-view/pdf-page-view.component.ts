import { PagesCollection } from './../iterator/pageIterator';
import { Iteratorr } from './../iterator/Iterator';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap, finalize } from 'rxjs/operators';
import { PagesDataService } from '../pages-data.service';
import { PagePanelDataService } from '../page-panel/page-panel-data.service';

import { Page } from '../page';
import { pipe, Observable } from 'rxjs';


@Component({
  selector: 'app-pdf-page-view',
  templateUrl: './pdf-page-view.component.html',
  styleUrls: ['./pdf-page-view.component.scss']
})
export class PdfPageViewComponent implements OnInit {

  public page: Page;
  private pageIterator: Iteratorr<Page>;
  private collection: PagesCollection;

  constructor(
    private route: ActivatedRoute,
    private pagesDataService: PagesDataService,
    private pagePanelDataService: PagePanelDataService
  ) {

  }
  /*testPage: Page = {
    _id: 'sss',
    questionN: 3,
    commentsN: 4,
    ratingN: 1,
    rating: 5,
    testN: 4,
  }*/

  ngOnInit() {
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
    let a1 = await this.getPages('5d7ff1aab45e5e5ea4176aff');
    this.collection.addItem(a1);
    let a2 = await this.getPages('5d8a65cd56434b294cf26448');
    this.collection.addItem(a2);
    let a3 = await this.getPages('5d8a660656434b294cf26449');
    this.collection.addItem(a3);
    callback();
    this.setPage(2);
  }

  setPage(page: number){
    this.page = this.pageIterator.setPage(page);
    this.pagePanelDataService.emitPage(this.page);
  }

  //event zmeny page z child componentu- pdf-viewer-hhanguler
  onPageChange(newPage: number){
    console.log("sssss");
    this.page = this.pageIterator.setPage(newPage);
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

}
