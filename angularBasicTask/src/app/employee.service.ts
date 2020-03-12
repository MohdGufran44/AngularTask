import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employees';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/throw';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = '/assets/data/employees.json';
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url)
                    .catch(this.errorHandeler);
  }

  errorHandeler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'server Error');

  }
}
