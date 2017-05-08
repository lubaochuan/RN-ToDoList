export const USER_AUTHORIZED = 'USER_AUTHORIZED'
export const USER_SIGNED_OUT = 'USER_SIGNED_OUT'

export function userAuthorized(uid) {
  return {
    type: USER_AUTHORIZED,
    uid: uid
  }
}
export function userSignedOut() {
  return {
    type: USER_SIGNED_OUT
  }
}
