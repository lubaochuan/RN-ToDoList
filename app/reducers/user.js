import { USER_AUTHORIZED, USER_SIGNED_OUT } from '../actions/user'

export default function uid(state = null, action) {
  switch (action.type) {
    case USER_AUTHORIZED: {
      return action.uid
    }
    case USER_SIGNED_OUT: {
      return null
    }
    default:
      return state
  }
}
