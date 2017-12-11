import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo-item';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  items = [
      new TodoItem('Buy Flowers', false),
      new TodoItem('Get Shoes', false),
      new TodoItem('Collect Tickets', true),
      new TodoItem('Call Joe', false),
    ];

  constructor() { }

  ngOnInit() {
  }

  getListOfItems() {
    return this.items.filter(item=>!item.isComplete);
  }

  addItem(newItem){
    if(newItem!=''){
      this.items.push(new TodoItem(newItem, false));
    }
  }
}
