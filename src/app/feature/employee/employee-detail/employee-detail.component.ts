import { Subject, SubjectService } from './../../subject/subject.service';
import { Employee, EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee = {} as Employee;
  employeeForm!: FormGroup;
  subjects: Subject = {} as Subject;

  result?: string;

  constructor(
    // private router: Router,
    private service: EmployeeService,
    private fb: FormBuilder,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.createForm();
    this.route.data.subscribe((result: any) => {
      this.employee = result.employee.empDetail;
      this.subjects = result.employee.subjDetail;
      this.rebuildForm();
    });
    this.installEvent();
  }

  save(){
    this.service.saveEmployee(this.employeeForm.getRawValue()).subscribe(() => {
      alert('save success!');
    });
  }

  createForm(){
    this.employeeForm = this.fb.group({
      id: [null, [Validators.required,Validators.min(1),Validators.max(500)]],
      username: [null, [Validators.required,Validators.maxLength(30)]],
      name: [null,[Validators.required,Validators.maxLength(100)]],
      email: [null,[Validators.email,Validators.maxLength(150)]],
      phone: [null,Validators.maxLength(50)],
      website: [null, Validators.maxLength(200)],
      address: this.fb.group({
        street: null,
        suite: null,
        city: null,
        zipcode: null,
        geo: this.fb.group({
          lat: null,
          lng: null
        })
      }),
      company: this.fb.group({
        name: null,
        catchPhrase: null,
        bs: null
      }),
       rowVersion: null
    });
  }

  rebuildForm(){
    if (this.employee.id) {
      this.employeeForm.patchValue(this.employee);
      this.employeeForm.controls['id'].disable();
      this.employeeForm.controls['rowVersion'].setValue(this.employee.id);
    } else {
      this.employee = {} as Employee;
    }
  }

  installEvent(){

  }
}
