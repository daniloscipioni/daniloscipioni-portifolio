import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { routes } from './routes'
import i18n from './i18n'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)

Vue.config.productionTip = false
// Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

const router = new VueRouter(
  {
    routes,
    mode: 'history'
  }
)

Vue.use(VueResource)
console.log(process.env)
Vue.http.options.root = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000'
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
