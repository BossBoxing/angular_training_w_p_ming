import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Photo{
  albumId: number;
  id:number;
  title:string;
  url:string;
  thumbnailUrl:string;
  form:FormGroup;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  url: string = 'https://jsonplaceholder.typicode.com/photos/';

  constructor(private http: HttpClient) { }

  findAllPhoto(): any{
    return this.http.get<Photo>(this.url);
  }

  findPhotoByAlbumId(id: number): any{
    return this.http.get<any>(this.url + '?albumId=' + id);
  }

  savePhoto(photo: Photo): any{
    return this.http.put<Photo>(this.url + photo.id, photo);
  }
}
