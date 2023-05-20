import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [];
  newTodoTitle = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe(
      todos => this.todos = todos,
      error => console.error(error)
    );
  }

  addTodo() {
    const newTodo: Todo = {
      id: undefined,
      title: this.newTodoTitle,
      completed: false
    };

    this.todoService.addTodo(newTodo).subscribe(
      todo => {
        this.todos.push(todo);
        this.newTodoTitle = '';
      },
      error => console.error(error)
    );
  }

  updateTodoStatus(todo: Todo) {
    this.todoService.updateTodo(todo).subscribe(
      updatedTodo => {
        todo.completed = updatedTodo.completed;
      },
      error => console.error(error)
    );
  }
  

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo).subscribe(
      () => {
        this.todos = this.todos.filter(t => t.id !== todo.id);
      },
      error => console.error(error)
    );
  }
}


