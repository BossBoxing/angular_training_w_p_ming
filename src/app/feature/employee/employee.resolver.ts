import { Subject, SubjectService } from './../subject/subject.service';
import { Employee, EmployeeService } from './employee.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolver implements Resolve<boolean> {
  constructor(
    private router: Router,
    private empService: EmployeeService,
    private subjService: SubjectService
  ){ }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const param: any = this.router.getCurrentNavigation()?.extras.state;
    const EmpDatail = (param && param.id) ? 
      this.empService.findEmployeeById(param.id) : of({} as Employee)
    const SubjDatail = (param && param.id) ? 
      this.subjService.findSubjectByEmpId(param.id) : of({} as Subject)
    return forkJoin([EmpDatail,SubjDatail]).pipe(map((result: any) => {
      const empDetail = result[0];
      const subjDetail = result[1];
      return { empDetail,subjDetail };
    }));
  }
}
