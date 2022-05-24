import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Album, AlbumService } from './album.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  searchForm!: FormGroup;
  album: any = [];

  constructor(
      private service: AlbumService,
      private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.service.findAllAlbum().subscribe((response: Album) => {
      this.album = response;
    });
  }

  createForm(){
    this.searchForm = this.fb.group({
      id: [null,[Validators.min(1),Validators.max(10)]]
    });
  }

  FetchByEmpId(){
    const id = this.searchForm.controls['id'].value;
    if(id && id >= 1 && id <= 100){
      this.service.findAlbumByEmpId(id).subscribe((response: Album) => {
        this.album = response;
        console.log(this.album);
      });
    }
    else{
      this.service.findAllAlbum().subscribe((response: Album) => {
        this.album = response;
      });
    }
  }

  clear(){
    this.searchForm.reset();
    this.album = [];
  }

  deleteAlbum(id: number){
    // request api data
    this.service.deleteAlbumById(id).subscribe();

    this.album = this.album.filter((album: any) => album.id !== id);
  }

}
