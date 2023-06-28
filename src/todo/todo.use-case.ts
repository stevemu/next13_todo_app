import {Todo} from './todo.entity';

export interface TodoUseCaseOutputPort {
  getAllTodos: () => Todo[]
}

export interface TodoUseCaseInputPort {
  addTodo: (desc: string) => void;
  deleteTodo: (id: number) => void;
}

export class TodoUseCaseInteractor implements TodoUseCaseInputPort, TodoUseCaseOutputPort {
  private todos: Todo[] = [];

  addTodo(desc: string) {
    const todo = new Todo(Math.random(), desc);
    this.todos = [...this.todos, todo];
    return todo;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  getAllTodos() {
    return this.todos;
  }
}

