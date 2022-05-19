import { TestBed } from '@angular/core/testing';

import { LibroJsonService } from './libro-json.service';

describe('LibroJsonService', () => {
  let service: LibroJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibroJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
