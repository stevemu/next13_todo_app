'use client'
 
import { addTodo } from './action'
 
export function AddTodo() {
  return (
    <form action={addTodo}>
      <input name='desc' />
      <button>add todo</button>
    </form>
  )
}