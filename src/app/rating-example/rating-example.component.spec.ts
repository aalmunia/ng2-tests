import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingExampleComponent } from './rating-example.component';

describe('RatingExampleComponent', () => {
  let component: RatingExampleComponent;
  let fixture: ComponentFixture<RatingExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
