import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfPageViewComponent } from './pdf-page-view.component';

describe('PdfPageViewComponent', () => {
  let component: PdfPageViewComponent;
  let fixture: ComponentFixture<PdfPageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfPageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
