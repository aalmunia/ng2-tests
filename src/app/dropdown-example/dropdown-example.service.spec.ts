import { TestBed, inject } from '@angular/core/testing';

import { DropdownExampleService } from './dropdown-example.service';

describe('DropdownExampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DropdownExampleService]
    });
  });

  it('should be created', inject([DropdownExampleService], (service: DropdownExampleService) => {
    expect(service).toBeTruthy();
  }));
});
