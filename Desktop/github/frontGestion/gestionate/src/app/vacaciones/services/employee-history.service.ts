import { Injectable } from '@angular/core';
import { PeriodSummary } from '../model/period-summary.model';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { PeriodDetail } from '../model/period-detail.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHistoryService {

  constructor(private httpClient: HttpClient) { }

  getEmployeePeriodsHistory(employeeId: number): Observable<PeriodSummary[]> {

    return this.httpClient.get<PeriodSummary[]>(environment.vacationsBackendBasePath + 'vacacionesController/periodos/historico/' + employeeId)
      .pipe(map(response => {
        return response;
      }));
  }

  getEmployeePeriodDetails(periodId: number): Observable<PeriodDetail[]> {

    return this.httpClient.get<PeriodDetail[]>(environment.vacationsBackendBasePath + 'vacacionesController/periodos/detalle/' + periodId)
      .pipe(map(response => {
        return response;
      }));
  }
}
