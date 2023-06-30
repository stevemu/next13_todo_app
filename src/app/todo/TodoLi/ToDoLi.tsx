import { Todo } from "@/todo/todo.entity"
import { deleteTodo } from "../action"
import styles from './TodoLi.module.css';

export const TodoLi = ({todo}: {todo: Todo}) => {
  return (
    <li key={todo.id} className={styles.todoLi}>
      {todo.desc} 
      <form action={deleteTodo}>
        <input name="id" defaultValue={todo.id} hidden />
        <button>delete</button>
      </form>
   </li>
  )
}
