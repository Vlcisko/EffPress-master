import { Component, OnInit } from '@angular/core';

import { Page } from '../../page';

import { PagePanelDataService } from '../page-panel-data.service';



@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public pageContent = {
    rating: 0
  };

  pageTest: Page = {
    _id: "123",
    reviewNumber: 1,
    comentsNumber: 2,
    ratingNumber: 3,
    rating: 4,
  };

  constructor(private pagePanelDataService : PagePanelDataService) {
    this.pagePanelDataService.pageChanged$.subscribe(page => {
      this.pageContent.rating = page.rating;
      console.log("ddd");
    });
  }

  ngOnInit(){
  }



}
