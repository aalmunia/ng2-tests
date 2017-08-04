import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriaExampleComponent } from './galleria-example.component';

describe('GalleriaExampleComponent', () => {
  let component: GalleriaExampleComponent;
  let fixture: ComponentFixture<GalleriaExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleriaExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleriaExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
