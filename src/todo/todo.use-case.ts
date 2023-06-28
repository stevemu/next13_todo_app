import {Todo} from './todo.entity';

export interface TodoUseCaseOutputPort {
  getAllTodos: () => Todo[]
}

export interface TodoUseCaseInputPort {
  addTodo: (desc: string) => void;
  deleteTodo: (id: number) => void;
}

export interface ITodoPersistence {
  storeTodos: (todos: Todo[]) => Promise<void>;
  getTodos: () => Promise<Todo[]>;
}

export class TodoUseCaseInteractor implements TodoUseCaseInputPort, TodoUseCaseOutputPort {
  private todos: Todo[] = [];

  constructor(private todoPersistence: ITodoPersistence) {
    this.todoPersistence.getTodos().then(todos => {
      this.todos = todos;
    })
  }

  addTodo(desc: string) {
    const todo = new Todo(Math.random(), desc);
    this.todos = [...this.todos, todo];
    this.todoPersistence.storeTodos(this.todos);
    return todo;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id)
    this.todoPersistence.storeTodos(this.todos);
  }

  getAllTodos() {
    return this.todos;
  }
}

