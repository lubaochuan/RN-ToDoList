import { itemsRef } from '../firebase/firebaseApp'

export const types = {
  LOAD_ONLINE_TODOS: 'LOAD_ONLINE_TODOS',
  ONLINE_TODOS_LOADED: 'ONLINE_TODOS_LOADED',
  ADD_TODO: 'ADD_TODO',
  ADD_TODO_SUCCESS: 'ADD_TODO_SUCCESS',
  UPDATE_TODO: 'UPDATE_TODO',
  UPDATE_TODO_SUCCESS: 'UPDATE_TODO_SUCCESS',
  DELETE_TODO: 'DELETE_TODO',
  DELETE_TODO_SUCCESS: 'DELETE_TODO_SUCCESS'
}

export const itemActionCreators = {
  addTodo: (item) => {
    const id = Math.random().toString(36).substring(7)
    const itemRef = itemsRef.child(id)
    itemRef.set({
      id: id,
      txt: item.txt,
      complete: item.complete
    })
    return {type: types.ADD_TODO}
  },
  addTodoSuccess: (item) => {
    return {
      type: types.ADD_TODO_SUCCESS,
      item: item
    }
  },
  updateTodo: (item, id) => {
    item = {...item, id:id}
    itemsRef.child(id).set(item)
    return {type: types.UPDATE_TODO}
  },
  updateTodoSuccess: (item) => {
    return {
      type: types.UPDATE_TODO_SUCCESS,
      item: item
    }
  },
  deleteTodo: (id) => {
    itemsRef.child(id).remove()
    return {type: types.DELETE_TODO}
  },
  deleteTodoSuccess: (id) => {
    return {
      type: types.DELETE_TODO_SUCCESS,
      id: id
    }
  },
  loadOnlineTodos: () => (dispatch, getState) => {
    dispatch({type: types.LOAD_ONLINE_TODOS})
    itemsRef.on("value", function(snapshot) {
      console.log("items: ", snapshot.val());
      var items = [];
      snapshot.forEach((child) => {
        items.push({
          id: child.val().id,
          txt: child.val().txt,
          complete: child.val().complete
        })
      });
      dispatch({type: types.ONLINE_TODOS_LOADED, items:items})
    }, function (errorObject) {
      console.log("The loadOnlineTodos failed: " + errorObject.code)
      dispatch({type: types.ONLINE_TODOS_LOADED, items:errorObject, error: true})
    })
  }
}
