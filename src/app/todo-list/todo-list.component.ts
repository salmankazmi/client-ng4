import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from './todo-item';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() items: any;
  toDoItems: any;
  constructor() {
    
  }

  ngOnInit() {
  }

  getListOfItems() {
    if(this.items){
      this.toDoItems = this.items.filter(item => !item.isComplete);
      return this.toDoItems;
    }
  }

  addItem(newItem) {
    if (newItem != '') {
      this.items.push(new TodoItem(newItem, false));
    }
  }
}
