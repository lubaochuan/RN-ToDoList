import { types } from '../actions/items'

// Initial state of the store
const initialState = {
  loading: false,
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
          loading:false,
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
        onlineList: state.onlineList.filter((todo, i) => i != action.id),
      }
    }
    default:
      return state
  }
}
