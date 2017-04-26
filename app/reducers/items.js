import { types } from '../actions/items'

// Initial state of the store
const initialState = {
  loading: true,
  error: false,
  items: [
    {txt: 'Read a book', complete: false},
    {txt: 'Take a walk', complete: true},
    {txt: 'Do homework', complete: true},
  ]
}

export const reducer = (state = initialState, action) => {
  const {items} = state
  const {type, payload, error} = action

  switch (type) {
    case types.FETCH_TODOS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false
      }
    }
    case types.FETCH_TODOS_RESPONSE: {
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
        items: [...items, ...payload]
      }
    }
    case types.ADD: {
      return {
        ...state,
        items: [payload, ...items],
      }
    }
    case types.UPDATE: {
      items[payload.index] = payload.item
      return {
        ...state,
        items: [...items],
      }
    }
    case types.DELETE: {
      return {
        ...state,
        items: items.filter((todo, i) => i != payload),
      }
    }
    default:
      return state
  }
}
