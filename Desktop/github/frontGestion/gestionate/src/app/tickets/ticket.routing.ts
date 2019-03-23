import { Routes, RouterModule } from '@angular/router';
import {ListHistoryTicketComponent} from './components/list-history-ticket/list-history-ticket.component';
import {GetTicketComponent} from './components/get-ticket/get-ticket.component';
import {hola} from './components/get-ticket/get-ticketById.component';
import {createUserComponent} from './components/create-user/createUser.component';
import { CrearTicketComponent } from './components/crear-ticket/crear-ticket.component';
import {ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
  { path: 'listaTicketsHistory', component: ListHistoryTicketComponent },
  { path: 'getTickets', component: GetTicketComponent },
  { path: 'getTickets/:id', component: hola },
  { path: 'createUser', component: createUserComponent },
  { path: 'createTicket', component: CrearTicketComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
