import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './app.type';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly url = 'https://jsonplaceholder.typicode.com/';
  constructor(readonly http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(`${this.url}/posts`);
  }

  getPost(id: number) {
    return this.http.get<Post>(`${this.url}/posts/${id}`);
  }
}
