///////////////////////////////////////////
//                 Vue                   //
///////////////////////////////////////////

// Vue
import { createApp } from 'vue'
// Vue Router
import router from '@/js/vue-router'
//Pixina
import Pixina from '@/Pixina.vue'
//Vuetify
import vuetify from '@/plugins/vuetify'
//Vuex
import store from '@/js/vuex'

Vue.config.productionTip = false

createApp(Pixina)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
