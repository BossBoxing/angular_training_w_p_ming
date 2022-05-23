import { Subject, SubjectService } from './subject.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  searchForm!: FormGroup;
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
      this.rebuildForm();
    });

  }

  createForm(){
    this.searchForm = this.fb.group({
      id: [null,[Validators.min(1),Validators.max(10)]]
    });
  }

  FetchByEmpId(){
    const id = this.searchForm.controls['id'].value;
    if(id && id >= 1 && id <= 10){
      this.service.findSubjectByEmpId(id).subscribe((response: Subject) => {
        this.subject = response;
        console.log(this.subject);
        this.rebuildForm();
      });
    }
    else{
      this.service.findAllSubject().subscribe((response: Subject) => {
        this.subject = response;
        console.log(this.subject);
        this.rebuildForm();
      });
    }
  }

  rebuildForm(){
    if( this.subject.length > 0){
      this.subject.forEach((row: Subject) => row.form = this.createSubjectForm(row));
    }
  }

  createSubjectForm(subject: Subject){
    const fg = this.fb.group({
      userId:null,
      title:null,
      body:null
    });
    fg.patchValue(subject);
    fg.controls['userId'].disable();
    return fg;
  }

  // rebuildForm(){
  //   if (this.subject.id) {
  //     this.subject.patchValue(this.subject);
  //   } else {
  //     this.subject = {} as Subject;
  //   }
  // }
}
