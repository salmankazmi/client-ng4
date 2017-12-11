import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users;

  constructor(private userService: UserService) {

   }

  ngOnInit() {
  }
}
