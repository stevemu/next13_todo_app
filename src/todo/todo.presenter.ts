import { TodoUseCaseOutputPort } from "./todo.use-case";

export class TodoPresenter {
  constructor(private todoUseCaseOutputPort: TodoUseCaseOutputPort) {}

  async getTodos() {
    return this.todoUseCaseOutputPort.getAllTodos();
  }
}