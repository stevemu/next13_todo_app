import { TodoUseCaseInteractor } from "./todo.use-case"

describe('TodoInteractor', () => {
  it('can add a todo', () => {
    const todoInteractor = new TodoUseCaseInteractor();
    const todo = todoInteractor.addTodo(1, 'buy shorts');
    expect(todo.id).toBe(1)
    expect(todo.desc).toBe('buy shorts')
    expect(todoInteractor.getAllTodos()).toHaveLength(1)
  })


})