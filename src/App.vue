<template>
   <div id="app">
    <meu-header :rotas="routes" />
    <transition name="pagina">
      <router-view class="principal"></router-view>
    </transition>
    <meu-footer />
  </div>
</template>

<script>
import { routes } from "./routes";
import Header from "./components/shared/header/Header.vue";
import Footer from "./components/shared/footer/Footer.vue";

export default {
  name: "App",
  components: {
    // HelloI18n,
    "meu-header": Header,
    "meu-footer": Footer,
  },
  data() {
    return {
      routes,
    };
  },
};
</script>

<style>
@import "./assets/css/reset.css";
@import "./assets/css/normalize.css";

.principal {
  height: 100%;
}
.line {
  width: 95%;
}
.home {
  display: flex;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: 20px;
}
.main-view {
  text-align: justify;
  padding-right: 2rem;
}

.side-news {
  width: 35%;
}
.pagina-enter-active,
.pagina-leave-active {
  transition: opacity 0.3s;
}
.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}

::selection{
  background-color: #0095ff  !important;
}

@media screen and (min-width: 0) {
  .home {
    display: block;
    width: 100%;
    height: auto;
  }
  .main-view {
    text-align: justify;
    padding-right: 0rem;
  }
}

@media screen and (min-width: 768px) {
  .home {
    display: flex;
    height: auto;
  }
  .main-view {
    text-align: justify;
    padding-right: 2rem;
  }
}
</style>
