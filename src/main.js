import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { routes } from './routes'
import i18n from './i18n'
import store from '@/store'
import VueLoading from 'vuejs-loading-plugin'
import { MdButton, MdContent, MdTabs, MdCard, MdIcon } from 'vue-material/dist/components'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueRouter)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdCard)
Vue.use(MdIcon)

// overwrite defaults
Vue.use(VueLoading, {
  // dark: true, // default false
  text: 'Loading / Carregando' // default 'Loading'
  // loading: true, // default false
  // customLoader: myVueComponent, // replaces the spinner and text with your own
  // background: 'rgb(255,255,255)', // set custom background
  // classes: ['myclass'] // array, object or string
})

Vue.config.productionTip = false

const router = new VueRouter(
  {
    routes,
    mode: 'history'
  }
)

router.beforeEach((routeTo, routeFrom, next) => {
  if (!routeTo.meta.public && !store.state.token) {
    return next({ path: '/login' })
  }
  next()
})
Vue.use(VueResource)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  VueLoading
}).$mount('#app')
