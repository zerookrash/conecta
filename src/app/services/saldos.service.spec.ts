import { TestBed } from '@angular/core/testing';

import { SaldosService } from './saldos.service';

describe('SaldosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaldosService = TestBed.get(SaldosService);
    expect(service).toBeTruthy();
  });
});
