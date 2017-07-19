import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmapExampleComponent } from './gmap-example.component';

describe('GmapExampleComponent', () => {
  let component: GmapExampleComponent;
  let fixture: ComponentFixture<GmapExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmapExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmapExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
