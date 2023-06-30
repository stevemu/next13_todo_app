import { Todo } from "./todo.entity";
import { TodoGateway } from "./todo.use-case";
import fs from 'fs';

export class TodoFileGateway implements TodoGateway {
  async storeTodos(todos: Todo[]) {
    fs.writeFileSync('data/todos.json', JSON.stringify(todos, null, 4));
  }

  async getTodos() {
    const fileContents = fs.readFileSync('data/todos.json', 'utf8');
    return JSON.parse(fileContents);
  }
}