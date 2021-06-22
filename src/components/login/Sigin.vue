<template>

  <form class="login-form">

    <input type="text" :placeholder="$t('login-register.username')" />
    <input type="password" :placeholder="$t('login-register.password')" />
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
    }
  },
  methods: {
    signin () {
      this.$emit('registerOrSignin')
    }
  }
}
</script>
<style scoped lang="sass">
  @import "./styles/login-register.scss";
</style>
