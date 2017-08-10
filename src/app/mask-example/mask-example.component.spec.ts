import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskExampleComponent } from './mask-example.component';

describe('MaskExampleComponent', () => {
  let component: MaskExampleComponent;
  let fixture: ComponentFixture<MaskExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaskExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
