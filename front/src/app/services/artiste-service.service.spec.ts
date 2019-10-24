import { TestBed } from '@angular/core/testing';

import { ArtisteServiceService } from './artiste-service.service';

describe('ArtisteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtisteServiceService = TestBed.get(ArtisteServiceService);
    expect(service).toBeTruthy();
  });
});
