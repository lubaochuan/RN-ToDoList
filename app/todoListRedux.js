// The types of actions that you can dispatch to modify the state of the store
export const types = {
  ADD: 'ADD',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
}

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
  add: (item) => {
    return {type: types.ADD, payload: item}
  },
  update: (item, index) => {
    return {type: types.UPDATE, payload: {item: item, index: index}}
  },
  delete: (index) => {
    return {type: types.DELETE, payload: index}
  }
}

// Initial state of the store
const initialState = {
  items: [
    {txt: 'Read a book', complete: false},
    {txt: 'Take a walk', complete: true},
    {txt: 'Do homework', complete: true},
  ]
}

// Function to handle actions and update the state of the store.
// Notes:
// - The reducer must return a new state object. It must never modify
//   the state object. State objects should be treated as immutable.
// - We set \`state\` to our \`initialState\` by default. Redux will
//   call reducer() with no state on startup, and we are expected to
//   return the initial state of the app in this case.
export const reducer = (state = initialState, action) => {
  const {items} = state
  const {type, payload} = action

  switch (type) {
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
  }

  return state
}
