import { SubjectService } from './feature/subject/subject.service';
import { EmployeeService } from './feature/employee/employee.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeComponent } from './feature/employee/employee.component';
import { EmployeeDetailComponent } from './feature/employee/employee-detail/employee-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './feature/home/home.component';
import { SubjectComponent } from './feature/subject/subject.component';
import { PhotoComponent } from './feature/photo/photo.component';
import { AlbumComponent } from './feature/album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    HomeComponent,
    SubjectComponent,
    PhotoComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [EmployeeService,SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
