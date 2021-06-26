<template>
<div>
  <form class="login-form" @submit.prevent="efetuarLogin">
    <input
      type="text"
      :placeholder="$t('login-register.username')"
      v-model="user.user"
    />
    <input
      type="password"
      :placeholder="$t('login-register.password')"
      v-model="user.password"
    />
    <button>login</button>
    <p class="message">
      {{ $t("login-register.not-registered") }}
      <a href="#" @click="signin">{{ $t("login-register.create-account") }}</a>
    </p>
  </form>
    <div class="error-message" v-show="errorMessage">   {{ errorMessage }}   </div>
  </div>

</template>
<script>
export default {
  name: 'Signin',
  data () {
    return {
      user: {},
      errorMessage: ''
    }
  },
  methods: {
    signin () {
      this.$emit('registerOrSignin')
    },
    efetuarLogin () {
      this.$store
        .dispatch('efetuarLogin', this.user)
        .then((data) => {
          // this.$router.push({ path: '/contact' })
          this.errorMessage = ''
        })
        .catch((err) => {
          if (err.request.status === 401) {
            this.errorMessage = this.$t('login-register.error-message')
          }
        })
    }
  }
}
</script>
<style scoped lang="sass">
@import "./styles/login-register.scss"
</style>
