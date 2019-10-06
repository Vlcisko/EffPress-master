import { AuthenticationService } from './../authentication.service';
import { PagesDataService } from './../pages-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Page } from '../page';


@Component({
  selector: 'app-page-panel',
  templateUrl: './page-panel.component.html',
  styleUrls: ['./page-panel.component.scss'],
})
export class PagePanelComponent implements OnInit {

  @Input() page: Page;

  public formVisible: boolean = false;

  public newRating = {
    rating:5,
    author: ''
  }

  public formError: string;

  constructor(
    private pagesDataService: PagesDataService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
  }

  private formIsValid(): boolean {
    if (this.newRating.rating) {
      return true;
    } else {
      return false;
    }
  }

  private resetAndHideRatingForm(): void {
    this.formVisible = false;
    this.newRating.author = '';
    this.newRating.rating = 5;
  }

  public onRateSubmit(): void {
    this.formError = '';
    this.newRating.author = this.getUsername();
    if (this.formIsValid()) {
      this.pagesDataService.addRatingByPdfPageId('5d8b640a58dda71924bd2f95', this.page._id, this.newRating)
        .then((page: Page) => {
          console.log('Rating saved', page);
          this.page = page;
          this.resetAndHideRatingForm();
        });
    } else {
      this.formError = 'Pre vloženie je potrebné vyplniť všetky polia';
    }
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public getUsername(): string {
    const { name } = this.authenticationService.getCurrentUser();
    return name ? name : 'Guest';
  }



}
