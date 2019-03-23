import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseObject} from '../model/ResponseObject';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TicketHistoryService {

  private baseUrl = 'http://localhost:8084/tickets';

  constructor(private http: HttpClient) { }

  getTicketHistory(): Observable<ResponseObject> {
    return this.http.get<ResponseObject>(this.baseUrl);
  }
}
