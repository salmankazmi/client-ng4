import { Injectable } from '@angular/core';
import { TODOITEMS } from './../todo-list/TodoList';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TodoService {

  constructor() { }

  getUserTodoItems(userId?: number): Observable<any> {
    return of(TODOITEMS);
  }
}
