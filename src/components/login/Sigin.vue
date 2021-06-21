<template>
  <form class="login-form">
    <input type="text" placeholder="username" />
    <input type="password" placeholder="password" />
    <button>login</button>
    <p class="message">
      Not registered? <a href="#" v-on:click="this.$emit('register')">Create an account</a>
    </p>
  </form>
</template>
