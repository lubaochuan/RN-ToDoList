import * as firebase from 'firebase'
import config from './config'
import { itemActionCreators } from '../actions/items'
import { userActionCreators } from '../actions/user'

export default class Firebase {
  static initialize(callback) {
    if (firebase.apps.length === 0) {
      firebase.initializeApp({
        apiKey: config.API_KEY,
        authDomain: config.AUTH_DOMAIN,
        databaseURL: config.DATABASE_URL,
        storageBucket: config.STORAGE_BUCKET
      }).auth().onAuthStateChanged(callback);
    }
    return firebase
  }
}
