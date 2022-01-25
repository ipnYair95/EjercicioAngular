import { TestBed } from '@angular/core/testing';

import { ValidarTokenService } from './validar-token.service';

describe('ValidarTokenService', () => {
  let service: ValidarTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidarTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
