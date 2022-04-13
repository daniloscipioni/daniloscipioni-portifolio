<template>
<div>
  <form @submit.prevent="createNewUser" class="register-form">
    <input type="text" :placeholder="$t('login-register.nmuser')" v-model="user.nmuser"/>
    <input type="text" :placeholder="$t('login-register.username')" v-model="user.username"/>
    <input type="password" :placeholder="$t('login-register.password')" v-model="user.password" />
    <input type="text" :placeholder="$t('login-register.email-address')" v-model="user.email"/>
    <button>{{ $t('login-register.create') }}</button>
    <p class="message">
     {{ $t('login-register.is-registered') }} <a href="#" @click="register">{{ $t('login-register.signin') }}</a>
    </p>
  </form>
  <div class="error-message" v-show="errorMessage">   {{ errorMessage }}   </div>
  <div class="success-message" v-show="successMessage">   {{ successMessage }}   </div>
  </div>
</template>
<script>
import http from '@/http'
import { asyncLoading } from 'vuejs-loading-plugin'
export default {
  name: 'Register',
  data: function () {
    return {
      user: {},
      errorMessage: '',
      successMessage: ''
    }
  },
  methods: {
    register () {
      this.$emit('registerOrSignin')
    },
    createNewUser () {
      const register = new Promise((resolve, reject) => {
        http.post('/register', this.user).then(response => {
          this.user = {}
          // this.$router.push({ path: '/login' })
          this.successMessage = this.$t('login-register.success-message-register')
          this.errorMessage = ''
          resolve(response.data)
        }).catch(err => {
          this.user = {}
          if (err.response.status === 406) {
            this.errorMessage = this.$t('login-register.error-message-register')
            this.successMessage = ''
          }
          reject(err)
        })
      })
      asyncLoading(register).then().catch()
      return register
    }
  }
}
</script>
<style scoped lang="sass">
  @import "./styles/login-register.scss"
</style>
