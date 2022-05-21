import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _url3 = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this._url3);
  }

  getPost(id: number): Observable<IPost> {
    return this.http.get<IPost>(this._url3 + '/' + id);
  }

}
