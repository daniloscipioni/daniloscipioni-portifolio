<template>
  <div id="app">
    <meu-header :rotas="routes"/>
    <hr class="line">
    <transition name="pagina">
      <router-view class="principal"></router-view>
    </transition>
    <meu-footer/>
  </div>
</template>

<script>
import { routes } from './routes'
import Header from './components/shared/header/Header.vue'
import Footer from './components/shared/footer/Footer.vue'

export default {
  name: 'App',
  components: {
    // HelloI18n,
    'meu-header': Header,
    'meu-footer': Footer
  },
  data () {
    return {
      routes
    }
  }
}
</script>

<style scope>
@import './assets/css/reset.css';
@import './assets/css/normalize.css';

.principal{
  height: 100%;
}
.line{
  width: 95%;
}
</style>
