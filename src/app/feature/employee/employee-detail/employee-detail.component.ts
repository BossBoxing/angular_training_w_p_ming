import { Employee, EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  param: any = this.router.getCurrentNavigation()?.extras.state;

  //name = new FormControl('');

  employee: Employee = {} as Employee;
  employeeForm!: FormGroup;

  // employeeForm = new FormGroup({
  //   id: new FormControl(''),
  //   username: new FormControl(''),
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   phone: new FormControl(''),
  //   website: new FormControl(''),
  // });

  result?: string;
  //result: string = "";

  constructor(
    private router: Router,
    private service: EmployeeService,
    private fb: FormBuilder
    ) {}

  ngOnInit(): void {
    this.createForm();
    console.log(this.param);
    
    if (this.param){
      this.service.findEmployeeById(this.param.id).subscribe((res: any) =>{
        this.employee = res[0];
        this.rebuildForm();
        // this.employeeForm.patchValue(this.employee);
      });
      this.installEvent();
      //this.name.setValue(this.param.username);
    }
    else{
      // 1
      //this.name.setValue(null);

      // 2
      this.router.navigate(['employee']);
      //alert('ไม่มีข้อมูลผู้ใช้');
    }
    //console.log(this.param);
  }

  updateName(){
    //this.result = this.name.value;
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
      })
    });
  }

  rebuildForm(){
    if (this.employee.id) {
      this.employeeForm.patchValue(this.employee);
      //this.employeeForm.controls['id'].disable();
    } else {
      this.employee = {} as Employee;
    }
  }

  installEvent(){
  //   this.employeeForm.controls['id'].valueChanges.subscribe(res => {
  //     if (this.employeeForm.controls['id'].dirty){
  //       console.log('ID have value : ' + this.employeeForm.controls['id'].valid);
  //     }
  //   })
  //   // this.employeeForm.controls['id'].valueChanges.subscribe((id: any) => {
  //   //   console.log(id);
  //   // });
  }
}
