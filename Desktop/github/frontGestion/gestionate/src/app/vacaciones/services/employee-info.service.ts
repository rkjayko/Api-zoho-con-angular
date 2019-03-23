import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { EmployeeInfo } from '../model/employee-info.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeInfoService {

  constructor(private httpClient: HttpClient) { }

  getEmployeeInfo(employeeId: number): Observable<EmployeeInfo> {

    return this.httpClient.get<EmployeeInfo>(environment.vacationsBackendBasePath + 'empleadoController/obtenerDatosGenerales/' + employeeId)
      .pipe(map(response => {
        return response;
      }));
  }
}
