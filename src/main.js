// Vue
import Vue from 'vue'
// Vuex
import Vuex from 'vuex'
// Vue Router
import VueRouter from 'vue-router'
// Bootstrap 
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// Pixina 
import Pixina from '@/Pixina.vue'
// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

///////////////////////////////////////////
//             FontAwesome               //
///////////////////////////////////////////

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import vuetify from '@/plugins/vuetify';

library.add(
  faEnvelope,
  faGoogle,
  faApple,
  faMicrosoft,
  faArrowRight
)

Vue.component('font-awesome-icon', FontAwesomeIcon)


///////////////////////////////////////////
//                Vuex                   //
///////////////////////////////////////////

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 0 = enter email or single signin
    // 1 = enter password
    // 2 = register user details
    // 3 = confirm email
    // 99 = logged in
    loginState: 0,
    // The E-Mail the user has entered
    email: null,
    //The Google clientId
    googleClientId: "861982955154-8dnmcg5ob5oih4af5ge0be64iv1mh9uv.apps.googleusercontent.com"
  },
  getters: {
    isLoggedIn: state => {
      return state.loginState == 99
    }
  },
  mutations: {
    setLoginState(state, newState) {
      state.loginState = newState
    },
    setEmailAddress(state, email) {
      state.email = email
    }
  }
})

///////////////////////////////////////////
//              Vue Router               //
///////////////////////////////////////////

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('@/components/user/Dashboard.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      component: () => import('@/components/login/LoginPage.vue'),
      children: [
        {
          path: 'enter-email',
          alias: '',
          component: () => import('@/components/login/EnterEmail.vue')
        },
        {
          path: 'enter-password',
          component: () => import('@/components/login/EnterPassword.vue')
        },
        {
          path: 'enter-user-details',
          component: () => import('@/components/login/EnterUserDetails.vue')
        }
        //TODO passwort vergessen
        //TODO registrierung
      ]
    },
    {//Must be at the bottom, because of the asterix (*) path
      path: '/not-found',
      alias: '*',
      component: () => import('@/components/misc/NotFound.vue')
    },
  ]
});

//Check if the user is authenticated, otherwise reroute them
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next({
        path: "/login"
      })
    } else {
      next()
    }
  } else {
    next()
  }
});

///////////////////////////////////////////
//                 Vue                   //
///////////////////////////////////////////

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router,
  render: h => h(Pixina),
  vuetify,
  store: store
})

//popper.js
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('[data-toggle="tooltip"]').forEach(
    dth => dth.tooltip()
  )
})