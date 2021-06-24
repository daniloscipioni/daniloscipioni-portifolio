import Vuex from 'vuex'
import Vue from 'vue'
import http from '@/http'
Vue.use(Vuex)

const estado = {
  token: null,
  user: {}
}

const mutations = {
  DEFINIR_USUARIO_LOGADO (state, { token, user }) {
    state.token = token
    state.user = user
  }
}

const actions = {
  efetuarLogin ({ commit }, user) {
    console.log(user)
    return new Promise((resolve, reject) => {
      http.post('/login', user)
        .then(response => {
          console.log(response)
          commit('DEFINIR_USUARIO_LOGADO', {
            //    token: response.data.access_token,
            //    usuario: response.data.user
            token: 'teste_token',
            user: user
          })
          //     resolve(response.data)
          resolve(null)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
    })
  }
}

export default new Vuex.Store({
  state: estado,
  mutations,
  actions
})
