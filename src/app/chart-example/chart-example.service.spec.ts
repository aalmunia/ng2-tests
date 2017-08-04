import { TestBed, inject } from '@angular/core/testing';

import { ChartExampleService } from './chart-example.service';

describe('ChartExampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartExampleService]
    });
  });

  it('should be created', inject([ChartExampleService], (service: ChartExampleService) => {
    expect(service).toBeTruthy();
  }));
});
