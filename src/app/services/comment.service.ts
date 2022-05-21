import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private _url2 = 'http://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {
  }

  getComments(): Observable<IComment[]> {
    return this.http.get<IComment[]>(this._url2);
  }

  getComment(id: string): Observable<IComment> {
    return this.http.get<IComment>(this._url2 + '/' + id);
  }

}
