///////////////////////////////////////////
//                 Vue                   //
///////////////////////////////////////////

// Vue
import { createApp } from 'vue'
//Pixina
import Pixina from '@/Pixina.vue'
// Vue Router
import router from '@/js/vue-router'
//Vuex
import store from '@/js/vuex'
//Vuetify
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

createApp(Pixina)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
