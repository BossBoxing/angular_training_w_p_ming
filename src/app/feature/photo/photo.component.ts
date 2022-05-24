import { Album, AlbumService } from './../album/album.service';
import { Photo, PhotoService } from './photo.service';
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
  AlbumForm!: FormGroup;
 // CardPhotoForm!: FormGroup;
  album!: Album;
  
  constructor(
      private service: PhotoService,
      private service_Album: AlbumService,
      private fb: FormBuilder,
      private router:Router
    ) { }

  ngOnInit(): void {
    this.createAlbumForm();
    this.service.findPhotoByAlbumId(this.param.albumId)
      .subscribe((Response: any) => {
        this.photo = Response
        this.rebuildForm();
      });
    this.setAlbumForm();
    //console.log(this.param);
  }

  createAlbumForm(){
    this.AlbumForm = this.fb.group({
        albumId: null,
        userId: null,
        title: null
    });
  }

  setAlbumForm(){
    this.AlbumForm.controls['albumId'].setValue(this.param.albumId);
    this.AlbumForm.controls['userId'].setValue(this.param.userId);
    this.AlbumForm.controls['title'].setValue(this.param.title);
    
    this.AlbumForm.controls['albumId'].disable();
    this.AlbumForm.controls['userId'].disable();
  }

  rebuildForm(){
    if( this.photo.length > 0){
      this.photo.forEach((row: Photo) => row.form = this.createPhotoForm(row));
    }
  }

  createPhotoForm(photo: Photo){
    const fg = this.fb.group({
      id:null,
      albumId:null,
      title:null,
      url:null
    });
    fg.patchValue(photo);
    fg.controls['id'].disable();
    return fg;
  }

  save(){
    //console.log('1');
    if(this.AlbumForm.controls['title'].dirty){
      this.album = {
        id : this.param.albumId,
        userId : this.param.userId,
        title : this.AlbumForm.controls['title'].value
      };
      this.service_Album.saveAlbum(this.album).subscribe();
      this.AlbumForm.controls['title'].markAsPristine();
    }
    
    if (this.photo.length > 0){
      this.photo.forEach((row: Photo) => {
        if(row.form.controls['title'].dirty){
          this.service.savePhoto(row.form.getRawValue()).subscribe();
          console.log(row.form.getRawValue());
          row.form.controls['title'].markAsPristine();
        }
      });
    }
    alert('save success!');
  }

}
