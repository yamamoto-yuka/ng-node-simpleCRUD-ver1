import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postdata } from '../interfaces/postdata';
import { Newpost } from '../interfaces/newpost';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private postURL = 'http://localhost:4400/postapi'
  private getURL = 'http://localhost:4400/getapi'
  constructor(private http: HttpClient) { }
  
  postService(customID:number, content: string) {
    let createbody = {
      customID: customID,
      content: content
    };
    return this.http.post<Newpost>(this.postURL, createbody)
  }

  getService(id: number) {
    return this.http.get<Postdata[]>(this.getURL + '/' + id );
  }
}
