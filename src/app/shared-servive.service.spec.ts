import { TestBed } from '@angular/core/testing';

import { SharedServiveService } from './shared-servive.service';

describe('SharedServiveService', () => {
  let service: SharedServiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedServiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
