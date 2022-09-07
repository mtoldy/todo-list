import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../pages/todo.component';


@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.scss']
})
export class TodoListHeaderComponent {

  newTodo!: Todo;

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() {
    this.createEmptyTodo();
  }

  addTodo() {
    if (this.newTodo.title.trim() !== '') {

      this.add.emit(this.newTodo);
      this.createEmptyTodo();
    }
  }

  createEmptyTodo() {
    this.newTodo = {
      id: -1,
      title: '',
      complete: false
    }
  }

}
