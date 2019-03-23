import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeHistoryComponent } from './components/employee-history/employee-history.component';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { EmployeeHistoryService } from './services/employee-history.service';
import { EmployeeInfoService } from './services/employee-info.service';
import { vacacionesRouting } from './vacaciones.routing';

@NgModule({
  declarations: [EmployeeHistoryComponent],
  imports: [
    CommonModule,
    AccordionModule,
    BrowserAnimationsModule,
    TableModule,
    vacacionesRouting
  ],
  exports: [
    EmployeeHistoryComponent
  ],
  providers: [
    EmployeeHistoryService,
    EmployeeInfoService
  ]
})
export class VacacionesModule { }
