import {todoService} from "../../services/todo.service.js"
import { store } from "../store.js"

export function addTodo(todo) {
  todoService.save(todo).then(savedTodo => 
    store.dispatch({ type: 'ADD_TODO', todo: savedTodo }))
}

