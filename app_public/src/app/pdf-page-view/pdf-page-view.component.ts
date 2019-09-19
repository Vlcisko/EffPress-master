import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PagesDataService } from '../pages-data.service';
import { PagePanelDataService } from '../page-panel/page-panel-data.service';

import { Page } from '../page';


@Component({
  selector: 'app-pdf-page-view',
  templateUrl: './pdf-page-view.component.html',
  styleUrls: ['./pdf-page-view.component.scss']
})
export class PdfPageViewComponent implements OnInit {

  public page: Page;

  constructor(
    private route: ActivatedRoute,
    private pagesDataService: PagesDataService,
    private pagePanelDataService: PagePanelDataService
  ) {

  }

  ngOnInit() {
    this.getPages();

  }

  getPages() {
    this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) => {
        //let id = params.get('pageId');
        let id = "5d7ff1aab45e5e5ea4176aff";
        return this.pagesDataService.getPageById(id);
      })
    )
    .subscribe((page: Page) => {
      this.page = page;
      this.pagePanelDataService.setSubject(this.page);
      //this.pagePanelDataService.emitPage(this.page);
    }, err =>{
      console.log(err);
    });

  }

}
