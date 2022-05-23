import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Subject{
  userId: number;
  id: number;
  title: string;
  body: string;
  form: FormGroup;
};

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  
  constructor(private http: HttpClient) { }

    url: string = 'https://jsonplaceholder.typicode.com/posts/';

    findSubjectByEmpId(id: number): any{
      return this.http.get<any>(this.url + '?userId=' + id);
    }

    findAllSubject(): any{
      return this.http.get<Subject>(this.url);
    }
}
