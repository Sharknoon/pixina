///////////////////////////////////////////
//                Vuex                   //
///////////////////////////////////////////

import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default const store = createStore({
  plugins: [createPersistedState()],
  state() {
    return {
    // 0 = enter email or single signin
    // 1 = enter password
    // 2 = register user details
    // 3 = confirm email
    // 99 = logged in
    loginState: 0,
    // google
    // facebook
    // email
    identityProvier: null,
    // The E-Mail the user has entered
    email: null,
    // The user registration data
    first_name: null,
    last_name: null,
    hashed_password: null,
    // The Google clientId
    googleClientId: "861982955154-8dnmcg5ob5oih4af5ge0be64iv1mh9uv.apps.googleusercontent.com"
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.loginState == 99
    },
    isGoogleIdentityProvider: state => {
      return state.identityProvier == "google"
    }
  },
  mutations: {
    setLoginState(state, newState) {
      state.loginState = newState
    },
    setEmailAddress(state, email) {
      state.email = email
    },
    setIdentityProvier(state, provider){
      state.identityProvier = provider
    }
  }
})
