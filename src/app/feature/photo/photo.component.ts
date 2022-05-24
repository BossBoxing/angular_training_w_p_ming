import { PhotoService } from './photo.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  param: any = this.router.getCurrentNavigation()?.extras.state;

  searchForm!: FormGroup;
  photo: any =[];
  
  constructor(
      private service: PhotoService,
      private fb: FormBuilder,
      private router:Router
    ) { }

  ngOnInit(): void {
    this.service.findPhotoByAlbumId(this.param.albumId)
      .subscribe((Response: any) => {
        this.photo = Response
      });
    
    
  }

}
