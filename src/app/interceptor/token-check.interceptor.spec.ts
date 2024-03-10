import { TestBed } from '@angular/core/testing';

import { TokenCheckInterceptor } from './token-check.interceptor';

describe('TokenCheckInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenCheckInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenCheckInterceptor = TestBed.inject(TokenCheckInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
