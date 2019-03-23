import { TestBed } from '@angular/core/testing';

import { TicketBDService } from './ticket-service.service';

describe('TicketBDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TicketBDService = TestBed.get(TicketBDService);
    expect(service).toBeTruthy();
  });
});
