import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../components/login-and-registration-comp/login-rej-panel/login-rej-panel.component';

@Injectable()
export class UserService {


  constructor(private http: HttpClient) {

  }

  /** Pobieramy wszystkie posty */
  get<T>(arg0: string): any {
    throw new Error("Method not implemented.");
  }
  /** Pobieramy jeden post podając id */
  getUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/lp/users/authorization', user);
  }
  createUser(user: User): Observable<Boolean> {
    console.log(user);
    return this.http.put<Boolean>('http://localhost:8080/lp/users/registration', user);
  }


  /** Dodajemy nowy post */
  addPost(post: User): Observable<User> {
    return this.http.post<User>('https://jsonplaceholder.typicode.com/posts', post);
  }
  post<T>(arg0: string, post: User): Observable<User> {
    throw new Error("Method not implemented.");
  }

  /** Aktualizujemy/Podmieniamy post
  updatePost(post: User): Observable<User> {
    return this.http.put('https://jsonplaceholder.typicode.com/posts/' + post.firstName, post);
  }
*/
  /** Usuwamy post */
  deletePost(id: number) {
    return this.http.delete<User>('https://jsonplaceholder.typicode.com/posts/' + id);
  }
  delete<T>(arg0: string): any {
    throw new Error("Method not implemented.");
  }

  /** Aktualizujemy pola w post */
  changePost(post: User) {
    return this.http.patch('https://jsonplaceholder.typicode.com/posts/' + post.firstName, post);
  }
  patch(arg0: string, post: User): any {
    throw new Error("Method not implemented.");
  }
}
