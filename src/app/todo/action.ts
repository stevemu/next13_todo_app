'use server'
 
import { revalidatePath } from 'next/cache'
import { todoController } from './interfaceAdapters';

export async function addTodo(data: FormData) {
  const desc = data.get('desc')?.toString() || ''
  await todoController.saveTodo(desc);
  revalidatePath('/todo')
}