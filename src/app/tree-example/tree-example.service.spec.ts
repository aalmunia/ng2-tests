import { TestBed, inject } from '@angular/core/testing';

import { TreeExampleService } from './tree-example.service';

describe('TreeExampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreeExampleService]
    });
  });

  it('should be created', inject([TreeExampleService], (service: TreeExampleService) => {
    expect(service).toBeTruthy();
  }));
});
