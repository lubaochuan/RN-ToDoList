import { initializeApp } from 'firebase'
import config from './config'
import { itemActionCreators } from '../actions/items'
import { userActionCreators } from '../actions/user'

export const firebaseApp = initializeApp({
  apiKey: config.API_KEY,
  authDomain: config.AUTH_DOMAIN,
  databaseURL: config.DATABASE_URL,
  storageBucket: config.STORAGE_BUCKET
})

export const itemsRef = firebaseApp.database().ref('items')

export function syncFirebase(store) {
  firebaseApp.auth().onAuthStateChanged((user) => {
    console.log("onAuthStateChanged is triggered")
    if(user){
      store.dispatch(userActionCreators.userAuthorized())
    }
  })

  itemsRef.on('child_added', (snapshot) => {
    store.dispatch(itemActionCreators.addTodoSuccess(snapshot.val()))
  })

  itemsRef.on('child_changed',(snapshot) => {
    store.dispatch(itemActionCreators.updateTodoSuccess(snapshot.val()))
  })

  itemsRef.on('child_removed', (snapshot) => {
    store.dispatch(itemActionCreators.deleteTodoSuccess(snapshot.val().id))
  })
}
