import {
  ADD_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  CLEAR_TODOS
} from '../actions/items'

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO_SUCCESS: {
      return state.concat([action.item])
    }
    case UPDATE_TODO_SUCCESS: {
      return state.map(
        (item) => action.item.id == item.id ? action.item : item);
    }
    case DELETE_TODO_SUCCESS: {
      return state.filter((todo) => todo.id != action.id)
    }
    case CLEAR_TODOS: {
      return []
    }
    default:
      return state
  }
}
