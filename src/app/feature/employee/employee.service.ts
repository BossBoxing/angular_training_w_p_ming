import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Employee{
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
  rowVersion: number;
}

export interface Address{
  street: string;
  suite: string;
  city: number;
  zipcode: number;
  geo:{
    lat: string;
    lng: string;
  };
}

export interface Company{
  name: string;
  catchPhrase: string;
  bs: string;
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor(private http: HttpClient) { }
  url: string = 'https://jsonplaceholder.typicode.com/users/';

  findAllEmployee(): any{
    return this.http.get<Employee>(this.url);
  }

  findEmployeeById(id: number): any{
    return this.http.get<Employee>(this.url+ id);
  }

  deleteEmployeeById(id: number): any{
    return this.http.delete(this.url+ id);
  }

  saveEmployee(employee: Employee): any{
    if (employee.rowVersion){
      return this.http.put<Employee>(this.url + employee.id
    , employee );
    } else{
      return this.http.post<Employee>(this.url
    , employee );
    }
  }

}
