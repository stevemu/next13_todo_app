'use client'
 
import { addTodo } from './action'
import { useState, useTransition } from 'react'

 
export function AddTodo() {
  let [isPending, startTransition] = useTransition();
  const [desc, setDesc] = useState('');

  return (
    <div>
      <input value={desc} onChange={(e) => {
        setDesc(e.target.value)
      }} />
      <button onClick={() => {
        setDesc('')
        startTransition(() => addTodo(desc))
      }}>
       {isPending ? 'Processing': 'Add Todo'}
      </button>
    </div>
  )
}