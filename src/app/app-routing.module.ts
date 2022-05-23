import { EmployeeResolver } from './feature/employee/employee.resolver';
import { SubjectComponent } from './feature/subject/subject.component';
import { HomeComponent } from './feature/home/home.component';
import { EmployeeDetailComponent } from './feature/employee/employee-detail/employee-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './feature/employee/employee.component';

const routes: Routes = [
  {path:'employee',component: EmployeeComponent},
  {path:'employee/detail',component: EmployeeDetailComponent},
  {path:'',component: HomeComponent},
  {path:'subject',component: SubjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    EmployeeResolver
  ]
})
export class AppRoutingModule { }
