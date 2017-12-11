import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: {};
  constructor(private userService: UserService) {
    this.getUsers();
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
  }

}
