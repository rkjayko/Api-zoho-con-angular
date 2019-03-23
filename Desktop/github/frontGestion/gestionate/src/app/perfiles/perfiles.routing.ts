import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from './components/employee/employee.component';
import {ModuleWithProviders} from '@angular/core';
import {ListaEmpleadosComponent} from './components/lista-empleados/lista-empleados.component';
import {DetalleEmpleadoComponent} from './components/detalle-empleado/detalle-empleado.component';

export const routes: Routes = [
  { path: 'empleado', component: EmployeeComponent },
  { path: 'listaEmpleados', component: ListaEmpleadosComponent },
  { path: 'detalleEmpleado/:idEmpleado', component: DetalleEmpleadoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
