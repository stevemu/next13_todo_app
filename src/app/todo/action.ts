'use server'
 
import { revalidatePath } from 'next/cache'
import { todoController } from './interfaceAdapters';

export async function addTodo(desc: string) {
  await todoController.saveTodo(desc);
  revalidatePath('/todo')
}

export async function deleteTodo(data: FormData) {
  const id = data.get('id')?.toString() || ''
  todoController.deleteTodo(Number(id));
  revalidatePath('/todo')
}