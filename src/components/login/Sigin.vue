<template>

  <form class="login-form" @submit.prevent="efetuarLogin">
    <input type="text" :placeholder="$t('login-register.username')" v-model="user.user" />
    <input type="password" :placeholder="$t('login-register.password')" v-model="user.password" />
    <button>login</button>
    <p class="message">
      {{ $t('login-register.not-registered') }} <a href="#" @click="signin">{{ $t('login-register.create-account') }}</a>
    </p>
  </form>
</template>
<script>
export default {
  name: 'Signin',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    signin () {
      this.$emit('registerOrSignin')
    },
    efetuarLogin () {
      alert(this.user.username)
      this.$store.dispatch('efetuarLogin', this.user)
      //  .then(() => {
      this.$router.push({ path: '/contact' })
      //     this.mensagemErro = ''
      //   })
      //   .catch(err => {
      //    if (err.request.status == 401) {
      //      this.mensagemErro = ' Login ou senha inválido(s)!!!'
      //    }
      //  })
    }
  }
}
</script>
<style scoped lang="sass">
  @import "./styles/login-register.scss";
</style>
