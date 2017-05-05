import { types } from '../actions/items'
import { userActionTypes } from '../actions/user'

// Initial state of the store
const initialState = {
  uid: null,
  authorizing: false,
  authorized: false,
  error: false,
  onlineList: []
}

export default (state = initialState, action) => {
  const {onlineList} = state
  const {type, items, error} = action

  switch (type) {
    case types.LOAD_ONLINE_TODOS: {
      return {
        ...state,
        loading: true,
        error: false
      }
    }
    case types.ONLINE_TODOS_LOADED: {
      if (error) {
        return {
          ...state,
          loading: false,
          error: true
        }
      }
      return {
        ...state,
        loading: false,
        onlineList: items
      }
    }
    case types.ADD_TODO_SUCCESS: {
      list = state.onlineList.concat([action.item])

      return {
        ...state,
        onlineList: list
      }
    }
    case types.UPDATE_TODO_SUCCESS: {
      list = state.onlineList.map(
        (item) => action.item.id == item.id ? action.item : item);

      return {
        ...state,
        onlineList: list,
      }
    }
    case types.DELETE_TODO_SUCCESS: {
      return {
        ...state,
        onlineList: state.onlineList.filter((todo) => todo.id != action.id),
      }
    }
    case userActionTypes.USER_START_AUTHORIZING: {
      return {
        ...state,
        authorizing: true
      }
    }
    case userActionTypes.USER_AUTHORIZED: {
      console.log("USER_AUTHORIZED received")
      return {
        ...state,
        authorizing: false,
        authorized: true
      }
    }
    case userActionTypes.USER_SIGNED_OUT: {
      console.log("USER_SIGNED_OUT received")
      return {
        ...state,
        authorizing: false,
        authorized: false,
        onlineList: [] //clear list
      }
    }
    default:
      return state
  }
}
