import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { User } from './user';

@Injectable()
export class UserService {
  private url: string = 'http://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  create(user: User) {
    return this.http.post(this.url + '/users', user);
  }

  /*
  destroy(user: User) {
    return this.http.delete(this.url + '/users/' + user.id).map((res: Response) => res.json());
  }

  update(user: User) {
    return this.http.put(this.url + '/users' + user.id, user).map((res: Response) => res.json());
  }

  getUser(user: User) {
    return this.http.get(this.url + '/users/' + user.id).map((res: Response) => res.json());
  } */

  getUsers() {
    return this.http.get(this.url + '/users');
  }
}
