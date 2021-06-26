import axios from 'axios'
import store from '@/store'

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL ? process.env.VUE_APP_API_URL : 'http://localhost:3000/api',
  header: {
    Accept: 'application/json',
    Content: 'application/json'
  }
})

http.interceptors.request.use(function (config) {
  const token = store.state.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, function (erro) {
  return Promise.reject(erro)
})

export default http
