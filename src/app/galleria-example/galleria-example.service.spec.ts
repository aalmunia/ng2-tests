import { TestBed, inject } from '@angular/core/testing';

import { GalleriaExampleService } from './galleria-example.service';

describe('GalleriaExampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GalleriaExampleService]
    });
  });

  it('should be created', inject([GalleriaExampleService], (service: GalleriaExampleService) => {
    expect(service).toBeTruthy();
  }));
});
