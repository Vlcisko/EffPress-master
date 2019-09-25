import { Page } from './../../page';
import { Component, OnInit } from '@angular/core';


import { PagePanelDataService } from '../page-panel-data.service';



@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  page: Page;

  constructor(private pagePanelDataService : PagePanelDataService) {
    this.pagePanelDataService.pageChanged$.subscribe(page => {
      this.page = page;
    });
  }

  ngOnInit(){
  }



}
