import { TestBed } from '@angular/core/testing';

import { RondaService } from './ronda.service';

describe('RondaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RondaService = TestBed.get(RondaService);
    expect(service).toBeTruthy();
  });
});
