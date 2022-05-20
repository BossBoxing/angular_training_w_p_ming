import { HomeComponent } from './feature/home/home.component';
import { EmployeeDetailComponent } from './feature/employee/employee-detail/employee-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './feature/employee/employee.component';

const routes: Routes = [
  {path:'employee',component: EmployeeComponent},
  {path:'employee/detail',component: EmployeeDetailComponent},
  {path:'',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
