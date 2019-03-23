
import { Injectable } from '@angular/core';
import {ResponseObject} from '../model/ResponseObject';
import {createUser} from '../model/createUser';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) 
};
@Injectable({
  providedIn: 'root'
})
export class createUserService {
	
  private apiUrl = 'http://localhost:8084/contacts';
	
  constructor(private http: HttpClient) { }
	
  addUser(user: createUser): Observable<ResponseObject> {
		return this.http.post<ResponseObject>(this.apiUrl, user , httpOptions)
	}
}