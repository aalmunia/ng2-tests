import { TestBed, inject } from '@angular/core/testing';

import { OrgchartExampleService } from './orgchart-example.service';

describe('OrgchartExampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrgchartExampleService]
    });
  });

  it('should be created', inject([OrgchartExampleService], (service: OrgchartExampleService) => {
    expect(service).toBeTruthy();
  }));
});
