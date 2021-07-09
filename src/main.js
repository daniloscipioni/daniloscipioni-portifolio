import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { routes } from './routes'
import i18n from './i18n'
import store from '@/store'
import VueLoading from 'vuejs-loading-plugin'

Vue.use(VueRouter)

// using default options
//Vue.use(VueLoading)

// overwrite defaults
Vue.use(VueLoading, {
  //dark: true, // default false
  text: 'Loading / Carregando', // default 'Loading'
  //loading: true, // default false
  //customLoader: myVueComponent, // replaces the spinner and text with your own
  //background: 'rgb(255,255,255)', // set custom background
  //classes: ['myclass'] // array, object or string
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