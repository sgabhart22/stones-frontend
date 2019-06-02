import { TestBed, inject } from '@angular/core/testing';

import { MockCellService } from './mock-cell.service';

describe('MockCellService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockCellService]
    });
  });

  it('should be created', inject([MockCellService], (service: MockCellService) => {
    expect(service).toBeTruthy();
  }));
});
