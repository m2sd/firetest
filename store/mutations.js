export default {
  DELETE_USER(state) {
    state.authUser = null
  },
  SET_USER(state, { authUser, claims }) {
    console.log('ON_AUTH_STATE_CHANGED_MUTATION')

    state.authUser = { ...authUser, claims }
    console.dir(state.authUser)

    // you can request additional fields if they are optional (e.g. photoURL)
    // const { uid, email, emailVerified, displayName, photoURL } = authUser

    // state.authUser = {
    //   uid,
    //   displayName,
    //   email,
    //   emailVerified,
    //   photoURL: photoURL || null, // results in photoURL being null for server auth
    //   // use custom claims to control access (see https://firebase.google.com/docs/auth/admin/custom-claims)
    //   isAdmin: claims.custom_claim
    // }
  }
}
