import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Album{
  userId:number;
  id:number;
  title:string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  url: string = 'https://jsonplaceholder.typicode.com/albums/';

  constructor(private http:HttpClient) { }

  findAllAlbum(): any{
    return this.http.get<Album>(this.url);
  }

  findAlbumByEmpId(id: number): any{
    return this.http.get<any>(this.url + '?userId=' + id);
  }

  deleteAlbumById(id: number): any{
    return this.http.delete(this.url+ id);
  }
}