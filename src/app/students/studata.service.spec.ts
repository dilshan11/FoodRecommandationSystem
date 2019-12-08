import { TestBed } from '@angular/core/testing';

import { StudataService } from './studata.service';

describe('StudataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudataService = TestBed.get(StudataService);
    expect(service).toBeTruthy();
  });
});
