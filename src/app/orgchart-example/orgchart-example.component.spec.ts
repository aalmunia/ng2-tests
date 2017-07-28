import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgchartExampleComponent } from './orgchart-example.component';

describe('OrgchartExampleComponent', () => {
  let component: OrgchartExampleComponent;
  let fixture: ComponentFixture<OrgchartExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgchartExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgchartExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
