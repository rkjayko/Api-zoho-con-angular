import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseObject} from '../Models/ResponseObject';

@Injectable({
  providedIn: 'root'
})
export class DetalleEmpleadoService {
  private baseUrl = 'http://localhost:8085/employee';
  constructor(private http: HttpClient) { }

  getEmpleado(id: string): Observable<ResponseObject> {
    return this.http.get<ResponseObject>(`${this.baseUrl}/${id}`);
  }
}
