import { Employee, EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  param: any = this.router.getCurrentNavigation()?.extras.state;

  //name = new FormControl('');
  employeeForm = new FormGroup({
    id: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl('')
  });

  result?: string;
  //result: string = "";

  constructor(
    private router: Router,
    private service: EmployeeService
    ) {}

  ngOnInit(): void {
    console.log(this.param);
    
    if (this.param){
      this.service.findEmployeeById(this.param.id).subscribe((res: Employee) =>{
        console.log(res);
      });
      //this.name.setValue(this.param.username);
      this.employeeForm.patchValue(this.param);
    }
    else{
      // 1
      //this.name.setValue(null);

      // 2
      //this.router.navigate(['employee']);
      //alert('ไม่มีข้อมูลผู้ใช้');
    }
    //console.log(this.param);
  }

  updateName(){
    //this.result = this.name.value;
  }

}
