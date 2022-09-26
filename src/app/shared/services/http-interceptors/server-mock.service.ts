/**
 * **********************
 * DON'T CHANGE THIS FILE
 * **********************
 */

import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { delay, Observable, of, switchMap, throwError } from 'rxjs';
import {
  ALL_TODO,
  DELETE_TODO,
  SAVE_TODO,
  TOGGLE_TODO,
} from 'src/app/shared/constants/urls';
import { Todo } from 'src/app/todo/pages/todo.component';

const todos: Todo[] = [
  {
    id: 1,
    title: 'Create 365 account',
    complete: false,
  },
  {
    id: 2,
    title: 'Clean inbox',
    complete: false,
  },
  {
    id: 3,
    title: 'Make restaurant reservation',
    complete: false,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ServerMockService implements HttpInterceptor {
  private id = todos.length;

  intercept(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    switch (true) {
      case req.url.startsWith(ALL_TODO):
        return this.sendResponse(todos, false);
      case req.url.startsWith(SAVE_TODO): {
        return this.sendResponse({ ...req.body, id: ++this.id }, true);
      }
      case req.url.startsWith(TOGGLE_TODO): {
        return this.sendResponse(
          { ...req.body, complete: !req.body.complete },
          true
        );
      }
      case req.url.startsWith(DELETE_TODO): {
        return this.sendResponse(req.body, true);
      }
    }
    throw new Error('Method not implemented.');
  }

  sendResponse(
    body: Todo | Todo[],
    trottling: boolean
  ): Observable<HttpResponse<Todo | Todo[]>> {
    return of(new HttpResponse({ status: 200, body })).pipe(
      delay(trottling ? Math.random() * 1000 : 0),
      switchMap((obs) =>
        trottling && Math.random() > 0.6
          ? throwError(() => new Error('Weird network error ;)'))
          : of(obs)
      )
    );
  }
}
