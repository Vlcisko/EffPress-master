import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfViewerHhangularComponent } from './pdf-viewer-hhangular.component';

describe('PdfViewerHhangularComponent', () => {
  let component: PdfViewerHhangularComponent;
  let fixture: ComponentFixture<PdfViewerHhangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfViewerHhangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfViewerHhangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
