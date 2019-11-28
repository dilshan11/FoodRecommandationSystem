import { TestBed } from '@angular/core/testing';

import { FoodproviderService } from './foodprovider.service';

describe('FoodproviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodproviderService = TestBed.get(FoodproviderService);
    expect(service).toBeTruthy();
  });
});
