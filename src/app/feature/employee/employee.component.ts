import { Router } from '@angular/router';
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
    private service: EmployeeService,
    private router: Router
    ) { 
      
    }

  ngOnInit(): void {

    this.service.findAllEmployee().subscribe((response: Employee) => {
      this.employee = response;
    });
  }

  addEmployee(){
    this.router.navigate(['employee/detail']);
    // this.router.navigate(['detail',{ id: 1}]);
  }
  deleteEmployee(id: number){
    // request api data
    this.service.deleteEmployeeById(id).subscribe();

    // this.employee.forEach((row: any,index: number) => {
    //   console.log(index);
    // });
    this.employee = this.employee.filter((emp: any) => emp.id !== id);
    // console.log(this.employee[0].id);
  }
  // saveEmployeeByEmp(employee: Employee): any{
  //   this.service.saveEmployee(employee);
  // }

}
