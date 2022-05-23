import { Subject, SubjectService } from './subject.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subject: any = [];
  subjectForm!: FormGroup;
  constructor(
    private service: SubjectService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.createForm();
    this.service.findAllSubject().subscribe((response: Subject) => {
      this.subject = response;
      console.log(this.subject)
    });

  }

  createForm(){
    this.subjectForm = this.fb.group({
      id: null
    });
  }

  FetchByEmpId(){
    const id = this.subjectForm.controls['id'].value;
    if(id){
      this.service.findSubjectByEmpId(id).subscribe((response: Subject) => {
        this.subject = response;
        console.log(this.subject)
      });
    }
    else{
      this.service.findAllSubject().subscribe((response: Subject) => {
        this.subject = response;
        console.log(this.subject)
      });
    }
  }

  // rebuildForm(){
  //   if (this.subject.id) {
  //     this.subject.patchValue(this.subject);
  //   } else {
  //     this.subject = {} as Subject;
  //   }
  // }
}
