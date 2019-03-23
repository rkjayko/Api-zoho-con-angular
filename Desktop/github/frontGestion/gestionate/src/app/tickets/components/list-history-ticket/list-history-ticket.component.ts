import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HistoryTicket} from '../../model/HistoryTicket';
import { TicketBDService } from "../../services/TicketBD.service";

@Component({
  selector: 'app-list-history-ticket',
  templateUrl: './list-history-ticket.component.html',
  styleUrls: ['./list-history-ticket.component.css']
})
export class ListHistoryTicketComponent implements OnInit {

  historyTickets: HistoryTicket[];

  constructor(
    private route: ActivatedRoute, private ListaHistoryTicketService: TicketBDService) { }

  ngOnInit() {
    this.getHero();
  }


  getHero(): void {
    this.ListaHistoryTicketService.getTicketComment().subscribe(historyTickets => {
      this.historyTickets = historyTickets.payload;
      console.log(this.historyTickets);
    });
  }

}


















