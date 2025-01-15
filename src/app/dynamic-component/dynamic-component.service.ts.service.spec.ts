import { TestBed } from '@angular/core/testing';

import { DynamicComponentServiceTsService } from './dynamic-component.service.ts.service';

describe('DynamicComponentServiceTsService', () => {
  let service: DynamicComponentServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicComponentServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
