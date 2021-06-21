<template>
  <form class="register-form" v-if="!signin">
    <input type="text" placeholder="name" />
    <input type="password" placeholder="password" />
    <input type="text" placeholder="email address" />
    <button>create</button>
    <p class="message">
      Already registered? <a href="#" v-on:click="this.$emit('register')">Sign In</a>
    </p>
  </form>
</template>
