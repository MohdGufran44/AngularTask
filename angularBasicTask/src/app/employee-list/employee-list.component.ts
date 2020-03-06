import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  providers: [EmployeeService],
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
    public employees = [];
  constructor(private empservice: EmployeeService) {
    console.log('rffergerg');
  }

  ngOnInit() {
    this.employees = this.empservice.getEmployees();
    console.log('raza '+this.employees);
  }

}
