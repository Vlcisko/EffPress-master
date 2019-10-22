import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

import { Page } from '../page';

@Injectable({
  providedIn: 'root'
})
export class PagePanelDataService {

  // Observable string sources
  public pageSource;

  // Observable string streams
  public pageChanged$;

  setSubject(page: Page): void {
    this.pageSource = new BehaviorSubject(page);
    this.pageChanged$ = this.pageSource.asObservable();
  }

  // Service message commands
  emitPage(changePage: Page): void {
    if (changePage) {
      window.turingSlideId = changePage._id;
      this.pageSource.next(changePage);
    }
  }

  constructor() { }
}
