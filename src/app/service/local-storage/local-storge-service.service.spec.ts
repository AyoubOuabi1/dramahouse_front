import { TestBed } from '@angular/core/testing';

import { LocalStorgeServiceService } from './local-storge-service.service';

describe('LocalStorgeServiceService', () => {
  let service: LocalStorgeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorgeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
