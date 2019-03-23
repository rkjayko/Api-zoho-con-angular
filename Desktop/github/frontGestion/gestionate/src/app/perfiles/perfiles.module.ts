import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './components/employee/employee.component';
import { routing } from './perfiles.routing';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import {ListaEmpleadoService} from './services/lista-empleado.service';
import {HttpClientModule} from '@angular/common/http';
import { DetalleEmpleadoComponent } from './components/detalle-empleado/detalle-empleado.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { InfoSocioDemograficaComponent } from './components/info-socio-demografica/info-socio-demografica.component';

@NgModule({
  declarations: [EmployeeComponent, ListaEmpleadosComponent, DetalleEmpleadoComponent, AcercaDeComponent, InfoSocioDemograficaComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    routing
  ],
  exports: [
    EmployeeComponent,
    ListaEmpleadosComponent
  ],
  providers: [ListaEmpleadoService],
})
export class PerfilesModule { }
