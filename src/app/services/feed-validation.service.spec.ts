import { TestBed } from '@angular/core/testing';

import { FeedValidationService } from './feed-validation.service';

describe('FeedValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeedValidationService = TestBed.get(FeedValidationService);
    expect(service).toBeTruthy();
  });
});
