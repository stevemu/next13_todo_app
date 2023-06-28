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
    revalidatePath('/todo')
  }

  async function deleteTodo(data: FormData) {
    'use server'
    const id = data.get('id')?.toString() || ''
    todoController.deleteTodo(Number(id));
    revalidatePath('/todo')
  }

  const todos = todoPresenter.getTodos();

  return (
    <main>
      <h1>todos:</h1>
      <ul>
        {todos.map(todo => {
          return <li key={todo.id}>
            {todo.desc} <form action={deleteTodo}><input name="id" value={todo.id} hidden /><button>delete</button></form>
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
