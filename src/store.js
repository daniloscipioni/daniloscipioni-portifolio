import Vuex from 'vuex'
import Vue from 'vue'
import http from '@/http'
import { asyncLoading } from 'vuejs-loading-plugin'
Vue.use(Vuex)

const estado = {
  token: null,
  user: {},
  news: {}
}

const mutations = {
  DEFINIR_USUARIO_LOGADO(state, { token, user }) {
    state.token = token
    state.user = user
  },
  DESLOGAR_USUARIO(state) {
    state.token = null
    state.user = {}
  },
  UPDATE_NEWS(state) {
    state.news = null
  }
}

const actions = {
  efetuarLogin({ commit }, user) {
    const login = new Promise((resolve, reject) => {
      http.post('/login', user)
        .then(response => {
          commit('DEFINIR_USUARIO_LOGADO', {
            token: response.data.data.authentication.token,
            user: response.data.data.user.data[0]
          })
          resolve(response.data)
          http.put(`/update/last-access?idUser=${response.data.data.user.data[0].user_id}`)
            .then(response => {
              // console.log(response)
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
    })



    // loading no login
    asyncLoading(login).then().catch()
    return login
  },

  searchNews({ commit }) {
    const newsUpdate = new Promise((resolve, reject) => {
      http.get('/rss')
        .then(response => {
          commit('UPDATE_NEWS', {
            news: response.data
          })
          resolve(response.data)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
    })
    asyncLoading(newsUpdate).then().catch()
    return newsUpdate
  }

}

const getters = {
  userIsLogged: state => Boolean(state.token),
  activeUser: state => Object(state.user)
}

export default new Vuex.Store({
  state: estado,
  mutations,
  actions,
  getters
})
