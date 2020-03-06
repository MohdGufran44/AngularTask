import { Injectable } from '@angular/core';

@Injectable(
  {
  providedIn: 'root'
}
)
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      {"id":101, "name":"Raza", "age":24},
      {"id":102, "name":"Ali", "age":21},
      {"id":103, "name":"Raju", "age":22},
      {"id":104, "name":"Surender", "age": 26},
      {"id":104, "name":"Injmam", "age":27},
    ];
  }
}
