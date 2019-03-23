import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-history-ticket',
  templateUrl: './create-history-ticket.component.html',
  styleUrls: ['./create-history-ticket.component.css']
})
export class CreateHistoryTicketComponent implements OnInit {

  constructor() { }

  autogrow(): void {
    const textArea = document.getElementById('textarea');
    textArea.style.overflow = 'hidden';
    textArea.style.height = '0px';
    textArea.style.height = textArea.scrollHeight + 'px';
  }

  ngOnInit() {
  }

}
