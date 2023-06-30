import { AddTodo } from "./AddTodo";
import { TodoLi } from "./TodoLi/ToDoLi";
import { todoPresenter } from "./interfaceAdapters";

export async function TodoList() {
  const todos = await todoPresenter.getTodos();

  return (
    <ul>
      {todos.map(todo => {
        return <TodoLi todo={todo} key={todo.id} />
      })}
    </ul>
  )
}
