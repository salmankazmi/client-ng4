import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  newUser = new User();
  @Output() createNewUserEvent = new EventEmitter();

  constructor(private userService: UserService) { }

  create(){
    this.createNewUserEvent.emit(this.newUser);
    this.newUser = new User();
  }

  ngOnInit() {
  }

}
