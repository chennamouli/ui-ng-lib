import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DummyApiService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    // const url = environment.postsUrl.format(postId);
    return this.http.get('http://jsonplaceholder.typicode.com/posts');
  }
}
