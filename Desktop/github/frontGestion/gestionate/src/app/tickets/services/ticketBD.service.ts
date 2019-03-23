import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseObject} from '../model/ResponseObject';
import {createUser} from '../model/createUser';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 
                              'Access-Control-Allow-Origin': '*',
                              'Access-Control-Allow-Methods': 'POST' })
};

@Injectable({
  providedIn: 'root'
})
export class TicketBDService {

  private baseUrl = 'http://localhost:8084';

  constructor(private http: HttpClient) { }

  getTicketHistory(): Observable<ResponseObject> {
    return this.http.get<ResponseObject>(this.baseUrl+'/tickets');
  }
	
  addUser(user: createUser): Observable<ResponseObject> {
		return this.http.post<ResponseObject>(this.baseUrl + '/contacts', user , httpOptions);
  }

  // getTicketHistory
  getTicketComment(): Observable<ResponseObject> {
    return this.http.get<ResponseObject>(this.baseUrl + '/getTicketComment/245460000001500077');
  }

  addTicket(ticket: any){
      return this.http.post<ResponseObject>(this.baseUrl+ '/tickets', ticket, httpOptions);
  }

  getTicket(contactId: string){
      return this.http.get<ResponseObject>(this.baseUrl+ '/tickets?contactId=' + contactId);
  }
}
