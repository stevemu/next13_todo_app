import Image from 'next/image'
import styles from './page.module.css'
import { TodoUseCaseInteractor } from '@/todo/todo.use-case';
import { TodoController } from '@/todo/todo.controller';
import { TodoPresenter } from '@/todo/todo.presenter';
import { revalidatePath } from 'next/cache'

const todoUseCaseInteractor = new TodoUseCaseInteractor();
const todoController = new TodoController(todoUseCaseInteractor);
const todoPresenter = new TodoPresenter(todoUseCaseInteractor);

export default function Home() {
  async function addTodo(data: FormData) {
    'use server'
    const desc = data.get('desc')?.toString() || ''
    todoController.saveTodo(desc);
    revalidatePath('/')
  }

  const todos = todoPresenter.getTodos();

  return (
    <main>
      <h1>todos:</h1>
      <ul>
        {todos.map(todo => {
          return <li key={todo.id}>
            {todo.desc}
          </li>
        })}
      </ul>
      <form action={addTodo}>
        <input name='desc' />
        <button>add todo</button>
      </form>
    </main>
  )
}
