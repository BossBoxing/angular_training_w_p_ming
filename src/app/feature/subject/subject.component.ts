import { Subject, SubjectService } from './subject.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subject: any = [];
  constructor(private service: SubjectService) { }

  ngOnInit(): void {
    this.service.findAllSubject().subscribe((response: Subject) => {
      this.subject = response;
      console.log(this.subject)
    });

  }

}
