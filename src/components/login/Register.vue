<template>
  <form class="register-form">
    <input type="text" placeholder="name" />
    <input type="password" placeholder="password" />
    <input type="text" placeholder="email address" />
    <button>create</button>
    <p class="message">
     {{ $t('login-register.is-registered') }} <a href="#" @click="register">{{ $t('login-register.signin') }}</a>
    </p>
  </form>
</template>
<script>
export default {
  name: 'Register',
  methods: {
    register (item) {
      this.$emit('registerOrSignin')
    }
  }
}
</script>
<style scoped lang="sass">
  @import "./styles/login-register.scss";
</style>
