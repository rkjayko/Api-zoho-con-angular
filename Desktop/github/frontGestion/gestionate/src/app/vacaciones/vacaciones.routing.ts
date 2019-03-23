import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeHistoryComponent } from './components/employee-history/employee-history.component';

export const vacacionesComponentsRouting : Routes = [
    { path: 'vacations/historical/:employeeId', component: EmployeeHistoryComponent}
];
export const vacacionesRouting: ModuleWithProviders = RouterModule.forChild(vacacionesComponentsRouting);

