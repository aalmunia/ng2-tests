import { TestBed, inject } from '@angular/core/testing';

import { MenuExampleService } from './menu-example.service';

describe('MenuExampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuExampleService]
    });
  });

  it('should be created', inject([MenuExampleService], (service: MenuExampleService) => {
    expect(service).toBeTruthy();
  }));
});
