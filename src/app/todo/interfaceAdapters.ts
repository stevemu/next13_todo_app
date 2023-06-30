import { TodoUseCaseInteractor } from '@/todo/todo.use-case';
import { TodoController } from '@/todo/todo.controller';
import { TodoPresenter } from '@/todo/todo.presenter';
import { TodoFileGateway } from '@/todo/todo.file.gateway';

export const todoUseCaseInteractor = new TodoUseCaseInteractor(new TodoFileGateway());

export const todoController = new TodoController(todoUseCaseInteractor);
export const todoPresenter = new TodoPresenter(todoUseCaseInteractor);
