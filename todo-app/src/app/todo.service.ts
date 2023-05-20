import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:8000/todos/';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    const url = `${this.apiUrl}${todo.id}/`;
    return this.http.put<Todo>(url, todo);
  }

  deleteTodo(todo: Todo): Observable<any> {
    const url = `${this.apiUrl}${todo.id}/`;
    return this.http.delete(url);
  }
}

