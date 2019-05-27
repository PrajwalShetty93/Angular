import { TestBed } from '@angular/core/testing';

import { UserDetailsServiceService } from './user-details-service.service';

describe('UserDetailsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDetailsServiceService = TestBed.get(UserDetailsServiceService);
    expect(service).toBeTruthy();
  });
});
