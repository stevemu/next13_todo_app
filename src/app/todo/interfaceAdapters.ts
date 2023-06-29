import { TodoUseCaseInteractor } from '@/todo/todo.use-case';
import { TodoController } from '@/todo/todo.controller';
import { TodoPresenter } from '@/todo/todo.presenter';
import { TodoFilePersistence } from '@/todo/todo.file.persistence';

export const todoUseCaseInteractor = new TodoUseCaseInteractor(new TodoFilePersistence());

export const todoController = new TodoController(todoUseCaseInteractor);
export const todoPresenter = new TodoPresenter(todoUseCaseInteractor);
