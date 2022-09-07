import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../pages/todo.component';


@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {

  private _todo!: Todo;
  @Input() set todo( value: Todo) {
    this._todo = value;
    this.attrId = `toggle-complete-${value.id}`;
  }
  get todo(): Todo {
    return this._todo;
  }

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  public attrId: string = '';

  constructor() {
  }

  toggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}
