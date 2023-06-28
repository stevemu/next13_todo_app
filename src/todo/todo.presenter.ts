import { TodoUseCaseOutputPort } from "./todo.use-case";

export class TodoPresenter {
  constructor(private todoUseCaseOutputPort: TodoUseCaseOutputPort) {}

  getTodos() {
    return this.todoUseCaseOutputPort.getAllTodos();
  }
}