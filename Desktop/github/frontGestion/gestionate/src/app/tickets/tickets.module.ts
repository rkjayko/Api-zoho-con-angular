import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './ticket.routing';
import { ListHistoryTicketComponent } from './components/list-history-ticket/list-history-ticket.component';
import {HttpClientModule} from '@angular/common/http';
import {createUserComponent} from './components/create-user/createUser.component';
import { CreateHistoryTicketComponent } from './components/create-history-ticket/create-history-ticket.component';
import { GetTicketComponent } from './components/get-ticket/get-ticket.component';
import {hola} from './components/get-ticket/get-ticketById.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearTicketComponent } from './components/crear-ticket/crear-ticket.component';

@NgModule({
  declarations: [ListHistoryTicketComponent, 
  CreateHistoryTicketComponent,createUserComponent, GetTicketComponent,hola,
  CrearTicketComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    routing,
    ReactiveFormsModule
  ],
  exports: [
    ListHistoryTicketComponent,
    GetTicketComponent,
    hola,
    CrearTicketComponent
  ]
})
export class TicketsModule { }
