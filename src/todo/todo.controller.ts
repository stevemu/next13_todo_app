import { TodoUseCaseInputPort } from "./todo.use-case";

export class TodoController {
  constructor(private todoUseCaseInputPort: TodoUseCaseInputPort) {}

  async saveTodo(desc: string) {
    const todo = this.todoUseCaseInputPort.addTodo(desc)
    return todo;
  }

  async deleteTodo(id: number) {
    this.todoUseCaseInputPort.deleteTodo(id)
  }
}

