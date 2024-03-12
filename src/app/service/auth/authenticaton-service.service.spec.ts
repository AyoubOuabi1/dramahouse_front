import { TestBed } from '@angular/core/testing';

import { AuthenticatonServiceService } from './authenticaton-service.service';

describe('AuthenticatonServiceService', () => {
  let service: AuthenticatonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticatonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
