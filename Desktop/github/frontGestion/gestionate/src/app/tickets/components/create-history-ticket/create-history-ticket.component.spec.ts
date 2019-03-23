import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHistoryTicketComponent } from './create-history-ticket.component';

describe('CreateHistoryTicketComponent', () => {
  let component: CreateHistoryTicketComponent;
  let fixture: ComponentFixture<CreateHistoryTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHistoryTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHistoryTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
