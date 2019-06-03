import { TestBed, inject } from '@angular/core/testing';

import { MockBoardService } from './mock-board.service';

describe('MockBoardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockBoardService]
    });
  });

  it('should be created', inject([MockBoardService], (service: MockBoardService) => {
    expect(service).toBeTruthy();
  }));
});
