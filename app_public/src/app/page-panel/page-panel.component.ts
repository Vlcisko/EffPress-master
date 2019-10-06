import { Component, OnInit, Input } from '@angular/core';
import { Page } from '../page';


@Component({
  selector: 'app-page-panel',
  templateUrl: './page-panel.component.html',
  styleUrls: ['./page-panel.component.scss'],
})
export class PagePanelComponent implements OnInit {

  @Input() page: Page;

  constructor(

  ) {}

  ngOnInit() {

  }


}
