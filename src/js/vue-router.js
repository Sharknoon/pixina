///////////////////////////////////////////
//              Vue Router               //
///////////////////////////////////////////

import Vue from 'vue'
import { createRouter } from 'vue-router'
import store from '@/js/vuex'

Vue.use(VueRouter)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/components/user/Navigation.vue'),
      meta: { requiresAuth: true }, 
      children: [
        {
          path: '/',
          alias: '/home',
          component: () => import('@/components/user/Home.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/profile',
          component: () => import('@/components/user/Profile.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/templates',
          component: () => import('@/components/user/Templates.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/chats',
          component: () => import('@/components/user/Chats.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/reservations',
          component: () => import('@/components/user/Reservations.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/place',
          component: () => import('@/components/user/Place.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/history',
          component: () => import('@/components/user/History.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/atlas',
          component: () => import('@/components/user/Atlas.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/tools',
          component: () => import('@/components/user/Tools.vue'),
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/components/login/LoginPage.vue'),
      children: [
        {
          path: 'only-google',
          alias: '',
          component: () => import('@/components/login/OnlyGoogle.vue')
        },
        {
          path: 'enter-email',
          component: () => import('@/components/login/EnterEmail.vue')
        },
        {
          path: 'enter-password',
          component: () => import('@/components/login/EnterPassword.vue')
        },
        {
          path: 'enter-user-details',
          component: () => import('@/components/login/EnterUserDetails.vue')
        },
        {
          path: 'confirm-mail',
          component: () => import('@/components/login/ConfirmMail.vue')
        }
        //TODO passwort vergessen
      ]
    },
    {//Must be at the bottom, because of the asterix (*) path
      path: '/:pathMatch(.*)*',
      name: 'not-found',
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

export default router;
