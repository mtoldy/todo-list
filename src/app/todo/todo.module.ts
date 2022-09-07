import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoListHeaderComponent } from './components/todo-list-header/todo-list-header.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './pages/todo.component';

@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoListHeaderComponent,
    TodoListItemComponent,
  ],
  imports: [CommonModule],
})
export class TodoModule {}
