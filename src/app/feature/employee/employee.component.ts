import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: any = [];
  constructor(
    private service: EmployeeService
    ) { 
      
    }

  ngOnInit(): void {

    this.service.findAllEmployee().subscribe((response: Employee) => {
      this.employee = response;
    });
  }

}
