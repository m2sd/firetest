export default {
  // Store action called nuxtServerInit:
  async nuxtServerInit({ dispatch, commit }, { req, res }) {
    if (res && res.locals && res.locals.user) {
      const { allClaims: claims, ...authUser } = res.locals.user

      console.log('server init action')

      await dispatch('onAuthStateChangedAction', {
        authUser,
        claims
      })

      // or
      // commit('ON_AUTH_STATE_CHANGED_MUTATION', { authUser, claims })
    }
  },
  onAuthStateChangedAction({ commit, dispatch }, { authUser, claims }) {
    if (!authUser) {
      commit('DELETE_USER')
      // await dispatch('cleanupAction')

      return
    }

    // you can request additional fields if they are optional (e.g. photoURL)
    // const { uid, email, emailVerified, displayName, photoURL } = authUser

    commit('SET_USER', {
      authUser,
      claims
    })
  }
}
