export const userActionTypes = {
  USER_START_AUTHORIZING: 'USER_START_AUTHORIZING',
  USER_AUTHORIZED: 'USER_AUTHORIZED',
  USER_START_SIGNING_OUT: 'USER_START_SIGNING_OUT',
  USER_SIGNED_OUT: 'USER_SIGNED_OUT'
}

export const userActionCreators = {
  startAuthorizing: () => {
    return {
      type: userActionTypes.USER_START_AUTHORIZING
    }
  },
  userAuthorized: () => {
    return {
      type: userActionTypes.USER_AUTHORIZED
    }
  },
  startSigningOut: () => {
    return {
      type: userActionTypes.USER_START_SIGNING_OUT
    }
  },
  userSignedOut: () => {
    return {
      type: userActionTypes.USER_SIGNED_OUT
    }
  }
}
