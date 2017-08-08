import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsExampleComponent } from './chips-example.component';

describe('ChipsExampleComponent', () => {
  let component: ChipsExampleComponent;
  let fixture: ComponentFixture<ChipsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
