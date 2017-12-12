import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { TodoService } from '../todo-list/todo.service';
import { TodoItem } from '../todo-list/todo-item';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: {};
  userItems: any;
  constructor(private userService: UserService, private todoService: TodoService) {

  }

  getUsers() {
    /* this.userService.getUsers().subscribe(result => {
      this.users = result;
    }) */
  }

  create(newUser: User) {
    this.userService.create(newUser).subscribe(
      result => {
        alert(result);
      })
  }

  ngOnInit() {
    //this.getUsers();
    this.todoService.getUserTodoItems().map((response)=>{
        this.userItems = response;
      }
    ).subscribe();

   /*  login(username: String, password: String) {
      return this.http.post('/authenticate/user', JSON.stringify({username : username, password : password}))
      .map((response: Response) => {
          const user = response.json();
          if (user && user.token) {
             localStorage.setItem('currentUser', JSON.stringify(user));
          }
          return user;
      });
  } */
  }
}
