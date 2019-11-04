import { TestBed } from '@angular/core/testing';

import { ArtisteService } from './artiste.service';

describe('ArtisteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtisteService = TestBed.get(ArtisteService);
    expect(service).toBeTruthy();
  });
});
