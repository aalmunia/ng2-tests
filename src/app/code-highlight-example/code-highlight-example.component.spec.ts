import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeHighlightExampleComponent } from './code-highlight-example.component';

describe('CodeHighlightExampleComponent', () => {
  let component: CodeHighlightExampleComponent;
  let fixture: ComponentFixture<CodeHighlightExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeHighlightExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeHighlightExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
