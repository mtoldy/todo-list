import { Component } from "@angular/core";
import { TodoService } from "../services/todo.service";

export interface Todo {
    id: number;
    title: string;
    complete: boolean;
}

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: [
        './todo.component.scss'
    ]
})
export class TodoComponent {
    public todos: Todo[] = [];

    constructor(private /** TODO remove private */ todoService: TodoService) { 
        todoService.getAllTodos().subscribe(todos => this.todos = todos);
    }

    onAddTodo(todo: Todo) {
        this.todoService
            .addTodo(todo)
            .subscribe(
                (newTodo) => {
                    this.todos = this.todos.concat(newTodo);
                }
            );
    }

    onToggleTodoComplete(todo: Todo) {
        this.todoService
            .toggleTodoComplete(todo)
            .subscribe(
                (updatedTodo) => {
                    todo = updatedTodo;
                }
            );
    }

    onRemoveTodo(todo: Todo) {
        this.todoService
            .deleteTodoById(todo.id)
            .subscribe(
                (_) => {
                    this.todos = this.todos.filter((t) => t.id !== todo.id);
                }
            );
    }
}