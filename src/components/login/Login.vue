<template>
  <div class="login-page">
    <div class="form">
      <sigin v-if="signin" @registerOrSignin="registerOrSignin"/>
      <register v-if="!signin" @registerOrSignin="registerOrSignin"/>
  </div>
  </div>
</template>
<script>
import Signin from '../login/Sigin.vue'
import Register from '../login/Register.vue'
export default {
  components: {
    sigin: Signin,
    register: Register
  },
  data () {
    return {
      usuario: {},
      mensagemErro: '',
      signin: true
    }
  },

  methods: {
    registerOrSignin () {
      this.signin = !this.signin
    }
    // efetuarLogin () {
    //   this.$store.dispatch('efetuarLogin', this.usuario)
    //     .then(() => {
    //       this.$router.push({ path: '' })
    //       this.mensagemErro = ''
    //     })
    //     .catch(err => {
    //       if (err.request.status === 401) {
    //         this.mensagemErro = ' Login ou senha inválido(s)!!!'
    //       }
    //     })
    // }
  }
}
</script>
<style scoped lang="sass">
  @import "./styles/login-register.scss";
</style>
