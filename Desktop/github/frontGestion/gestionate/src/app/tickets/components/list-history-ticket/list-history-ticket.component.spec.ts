import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHistoryTicketComponent } from './list-history-ticket.component';

describe('ListHistoryTicketComponent', () => {
  let component: ListHistoryTicketComponent;
  let fixture: ComponentFixture<ListHistoryTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHistoryTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHistoryTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
