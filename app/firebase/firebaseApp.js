import { initializeApp } from 'firebase'
import config from './config'
import { itemActionCreators } from '../actions/items'
import { userActionCreators } from '../actions/user'

export default class Firebase {
  static initialize(callback) {
    initializeApp({
      apiKey: config.API_KEY,
      authDomain: config.AUTH_DOMAIN,
      databaseURL: config.DATABASE_URL,
      storageBucket: config.STORAGE_BUCKET
    }).auth().onAuthStateChanged(callback);
  }
}
