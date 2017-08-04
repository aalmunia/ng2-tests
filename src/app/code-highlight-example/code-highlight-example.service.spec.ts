import { TestBed, inject } from '@angular/core/testing';

import { CodeHighlightExampleService } from './code-highlight-example.service';

describe('CodeHighlightExampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodeHighlightExampleService]
    });
  });

  it('should be created', inject([CodeHighlightExampleService], (service: CodeHighlightExampleService) => {
    expect(service).toBeTruthy();
  }));
});
