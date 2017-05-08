import Database from "../firebase/database"

export const ADD_TODO = 'ADD_TODO'
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
export const UPDATE_TODO = 'UPDATE_TODO'
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS'
export const DELETE_TODO = 'DELETE_TODO'
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS'
export const CLEAR_TODOS = 'CLEAR_TODOS'

export function addTodo(uid, item){
  Database.addTodo(uid, item)
  return {type: ADD_TODO}
}

export function addTodoSuccess(item){
  return {
    type: ADD_TODO_SUCCESS,
    item: item
  }
}

export function updateTodo(uid, item, id){
  Database.updateTodo(uid, item, id)
  return {type: UPDATE_TODO}
}

export function updateTodoSuccess(item){
  return {
    type: UPDATE_TODO_SUCCESS,
    item: item
  }
}

export function deleteTodo(uid, id){
  Database.deleteTodo(uid, id)
  return {type: DELETE_TODO}
}

export function deleteTodoSuccess(id){
  return {
    type: DELETE_TODO_SUCCESS,
    id: id
  }
}

export function clearTodos(){
  return {type: CLEAR_TODOS}
}
