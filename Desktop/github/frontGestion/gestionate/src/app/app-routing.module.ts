import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'empleado', loadChildren: './perfiles/perfiles.module#PerfilesModule' },
  { path: 'ticket', loadChildren: './tickets/tickets.module#TicketsModule' },
  //{path: 'vacations/historical/:employeeId', component: EmployeeHistoryComponent},
  { path: 'vacaciones', loadChildren: './vacaciones/vacaciones.module#VacacionesModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
