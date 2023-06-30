import Image from 'next/image'
import styles from './page.module.css'
import { AddTodo } from './AddTodo';
import { todoPresenter } from './interfaceAdapters';
import { TodoList } from './TodoList';

export default async function Home() {
  const todos = await todoPresenter.getTodos();

  return (
    <main>
      <h1>todos:</h1>
      <TodoList />
      <AddTodo />
    </main>
  )
}
