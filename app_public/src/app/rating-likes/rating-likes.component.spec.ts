import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingLikesComponent } from './rating-likes.component';

describe('RatingLikesComponent', () => {
  let component: RatingLikesComponent;
  let fixture: ComponentFixture<RatingLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
