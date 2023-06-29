import Image from 'next/image'
import styles from './page.module.css'
import { revalidatePath } from 'next/cache'
import { Todo } from '@/todo/todo.entity';
import { AddTodo } from './AddTodo';
import { todoController, todoPresenter } from './interfaceAdapters';

const TodoLi = ({todo, deleteTodo}: {todo: Todo, deleteTodo: (formData: FormData) => Promise<void>}) => {
  return (<li key={todo.id}>
    {todo.desc} <form action={deleteTodo}><input name="id" defaultValue={todo.id} hidden /><button>delete</button></form>
  </li>)
}

export default async function Home() {
  async function deleteTodo(data: FormData) {
    'use server'
    const id = data.get('id')?.toString() || ''
    todoController.deleteTodo(Number(id));
    revalidatePath('/todo')
  }

  const todos = await todoPresenter.getTodos();

  return (
    <main>
      <h1>todos:</h1>
      <ul>
        {todos.map(todo => {
          return <TodoLi todo={todo} key={todo.id} deleteTodo={deleteTodo} />
        })}
      </ul>
      <AddTodo />
    </main>
  )
}
