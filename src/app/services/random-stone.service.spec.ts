import { TestBed, inject } from '@angular/core/testing';

import { RandomStoneService } from './random-stone.service';

describe('RandomStoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomStoneService]
    });
  });

  it('should be created', inject([RandomStoneService], (service: RandomStoneService) => {
    expect(service).toBeTruthy();
  }));
});
