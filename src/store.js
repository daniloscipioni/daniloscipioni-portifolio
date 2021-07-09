import Vuex from 'vuex'
import Vue from 'vue'
import http from '@/http'
import { asyncLoading } from 'vuejs-loading-plugin'
Vue.use(Vuex)

const estado = {
  token: null,
  user: {}
}

const mutations = {
  DEFINIR_USUARIO_LOGADO (state, { token, user }) {
    state.token = token
    state.user = user
  },
  DESLOGAR_USUARIO (state) {
    state.token = null
    state.user = {}
  }
}

const actions = {
  efetuarLogin ({ commit }, user) {
    const login = new Promise((resolve, reject) => {
      http.post('/login', user)
        .then(response => {
          console.log(response.data)
          commit('DEFINIR_USUARIO_LOGADO', {
            token: response.data.data.authentication.token,
            user: response.data.data.user.data[0]
          })
          resolve(response.data)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
    })
    // loading no login
    asyncLoading(login).then().catch()
    return login
  }
}

const getters = {
  userIsLogged: state => Boolean(state.token)
}

export default new Vuex.Store({
  state: estado,
  mutations,
  actions,
  getters
})
