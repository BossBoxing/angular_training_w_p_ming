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
}

export interface Address{
  street: string;
  suite: string;
  city: number;
  zipcode: number;
  geo:{
    lat: string;
    long: string;
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

  findAllEmployee(): any{
    return this.http.get<Employee>('https://jsonplaceholder.typicode.com/users');
  }

  findEmployeeById(id: number): any{
    return this.http.get<Employee>('https://jsonplaceholder.typicode.com/users?id='+ id);
  }


}
