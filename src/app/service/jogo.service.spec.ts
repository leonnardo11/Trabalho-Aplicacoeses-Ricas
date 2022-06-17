import { TestBed } from '@angular/core/testing';

import { jogoService } from './jogo.service';

describe('jogoService', () => {
  let service: jogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(jogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
