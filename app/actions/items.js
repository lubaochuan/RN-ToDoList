export const types = {
  ADD: 'ADD',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  FETCH_TODOS_REQUEST: 'FETCH_TODOS_REQUEST',
  FETCH_TODOS_RESPONSE: 'FETCH_TODOS_RESPONSE',
}

export const itemActionCreators = {
  add: (item) => {
    return {type: types.ADD, payload: item}
  },
  update: (item, index) => {
    return {type: types.UPDATE, payload: {item: item, index: index}}
  },
  delete: (index) => {
    return {type: types.DELETE, payload: index}
  },
  fetchTodos: () => async (dispatch, getState) => {
    dispatch({type: types.FETCH_TODOS_REQUEST})
    try {
      const response = await fetch('https://58f4d4d2faec4c1200c0eed8.mockapi.io/todos')
      const items = await response.json()
      console.log(JSON.stringify(items))

      dispatch({type: types.FETCH_TODOS_RESPONSE, payload: items})
    } catch (e) {
      dispatch({type: types.FETCH_TODOS_RESPONSE, payload: e, error: true})
    }
  },
}
