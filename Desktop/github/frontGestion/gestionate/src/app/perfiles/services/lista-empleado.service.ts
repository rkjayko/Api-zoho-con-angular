import { Injectable } from '@angular/core';
import {Empleado} from '../Models/Empleado';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {ResponseObject} from '../Models/ResponseObject';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ListaEmpleadoService implements CanActivate {

  private baseUrl = 'http://localhost:8085/employee';

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return Promise.resolve(this.http.get(`${this.baseUrl}/rest/users/test`).toPromise()
      .then(a => true)
      .catch(e => {
        return false;
      }));
  }

  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<ResponseObject> {
    return this.http.get<ResponseObject>(this.baseUrl);
  }
}
