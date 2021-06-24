import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { routes } from './routes'
import i18n from './i18n'
import http from '@/http'
import store from '@/store'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter(
  {
    routes,
    mode: 'history'
  }
)

Vue.use(VueResource)

Vue.http.options.root = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000'
Vue.prototype.$http = http

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
