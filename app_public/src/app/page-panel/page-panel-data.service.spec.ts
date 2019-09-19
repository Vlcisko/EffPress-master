import { TestBed } from '@angular/core/testing';

import { PagePanelDataService } from './page-panel-data.service';

describe('PagePanelDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagePanelDataService = TestBed.get(PagePanelDataService);
    expect(service).toBeTruthy();
  });
});
