import {Todo} from './todo.entity';

export interface TodoUseCaseOutputPort {
  getAllTodos: () => Promise<Todo[]>
}

export interface TodoUseCaseInputPort {
  addTodo: (desc: string) => Promise<Todo>;
  deleteTodo: (id: number) => Promise<void>;
}

export interface TodoGateway {
  storeTodos: (todos: Todo[]) => Promise<void>;
  getTodos: () => Promise<Todo[]>;
}

export class TodoUseCaseInteractor implements TodoUseCaseInputPort, TodoUseCaseOutputPort {
  constructor(private todoPersistence: TodoGateway) {}

  async addTodo(desc: string) {
    const todo = new Todo(Math.random(), desc);
    const existingTodos = await this.todoPersistence.getTodos();
    const todos = [...existingTodos, todo];
    await this.todoPersistence.storeTodos(todos);
    return todo;
  }

  async deleteTodo(id: number) {
    const existingTodos = await this.todoPersistence.getTodos();
    const todos = existingTodos.filter(todo => todo.id !== id)
    await this.todoPersistence.storeTodos(todos);
  }

  async getAllTodos() {
    const existingTodos = await this.todoPersistence.getTodos();
    return existingTodos;
  }
}

