import { TestBed } from '@angular/core/testing';

import { LaporService } from './lapor.service';

describe('LaporService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaporService = TestBed.get(LaporService);
    expect(service).toBeTruthy();
  });
});
