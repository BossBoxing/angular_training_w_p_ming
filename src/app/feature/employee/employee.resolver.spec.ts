import { TestBed } from '@angular/core/testing';

import { EmployeeResolver } from './employee.resolver';

describe('EmployeeResolver', () => {
  let resolver: EmployeeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EmployeeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
