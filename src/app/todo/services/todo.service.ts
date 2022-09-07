import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, of, switchMap } from "rxjs";
import { ALL_TODO, DELETE_TODO, SAVE_TODO, TOGGLE_TODO } from "../../shared/constants/urls";
import { Todo } from "../pages/todo.component";

@Injectable()
export class TodoService {

    constructor(private http: HttpClient) {}

    getAllTodos() {
        return this.http.get(ALL_TODO).pipe(map(resp => resp as Todo[]));
    }

    addTodo(todo: Todo): Observable<Todo> {
        return this.http.post(SAVE_TODO, todo).pipe(map(resp => resp as Todo));
    }

    toggleTodoComplete(todo: Todo): Observable<Todo> {
        return this.http.put(TOGGLE_TODO, todo).pipe(map(resp => resp as Todo));
    }

    deleteTodoById(id: Number) {
        return this.http.delete(`${DELETE_TODO}/${id}`).pipe(switchMap(() => of(id)));
    }
}