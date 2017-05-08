import firebase from "firebase"

export default class Database {
  static listenToAdd(uid, callback) {
    let userPath = "/users/" + uid + "/items"
    console.log("listToAdd userPath: "+userPath)
    firebase.database().ref(userPath).on('child_added', (snapshot) => {
      console.log("child_added received")
      callback(snapshot.val())
    })
  }

  static listenToUpdate(uid, callback) {
    let userPath = "/users/" + uid + "/items"
    firebase.database().ref(userPath).on('child_changed', (snapshot) => {
      callback(snapshot.val())
    })
  }

  static listenToDelete(uid, callback) {
    let userPath = "/users/" + uid + "/items"
    firebase.database().ref(userPath).on('child_removed', (snapshot) => {
      callback(snapshot.val().id)
    })
  }

  static addTodo(uid, item) {
    const id = Math.random().toString(36).substring(7)
    console.log("uid: "+uid)
    let userPath = "/users/" + uid + "/items"
    const itemRef = firebase.database().ref(userPath).child(id)
    itemRef.set({
      id: id,
      txt: item.txt,
      complete: item.complete
    })
  }

  static updateTodo(uid, item, id) {
    let userPath = "/users/" + uid + "/items"
    const itemRef = firebase.database().ref(userPath).child(id)
    item = {...item, id:id}
    itemRef.set(item)
  }

  static deleteTodo(uid, id) {
    let userPath = "/users/" + uid + "/items"
    firebase.database().ref(userPath).child(id).remove()
  }
}
