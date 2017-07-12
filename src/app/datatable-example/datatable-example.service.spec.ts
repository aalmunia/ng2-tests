import { TestBed, inject } from '@angular/core/testing';

import { DatatableExampleService } from './datatable-example.service';

describe('DatatableExampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatatableExampleService]
    });
  });

  it('should be created', inject([DatatableExampleService], (service: DatatableExampleService) => {
    expect(service).toBeTruthy();
  }));
});
