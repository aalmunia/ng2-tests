import { TestBed, inject } from '@angular/core/testing';

import { ChipsExampleService } from './chips-example.service';

describe('ChipsExampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChipsExampleService]
    });
  });

  it('should be created', inject([ChipsExampleService], (service: ChipsExampleService) => {
    expect(service).toBeTruthy();
  }));
});
