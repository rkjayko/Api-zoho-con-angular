import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeHistoryComponent } from '../app/vacaciones/components/employee-history/employee-history.component';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { HomeComponent } from './shared/components/home/home.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { HeaderComponent } from './shared/components/header/header.component';
import {PerfilesModule} from './perfiles/perfiles.module';
import {ListaEmpleadoService} from './perfiles/services/lista-empleado.service';
import { TicketsModule } from './tickets/tickets.module';
import { TicketBDService } from "./tickets/services/TicketBD.service";
import { VacacionesModule } from './vacaciones/vacaciones.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,
    BrowserAnimationsModule,
    TableModule,
    PerfilesModule,
    TicketsModule,
    VacacionesModule
  ],
  providers: [ListaEmpleadoService, TicketBDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
