<template>
  <div id="app">
    <meu-header :rotas="routes" />
    <v-container>
      <v-row>
        <v-col md="8" offset-md="2" outline >
          <v-card flat outlined>
            <router-view></router-view>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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

.theme--light.v-sheet--outlined {
    border: 0 !important;
}

.mains {
  padding-left: 15%;
  padding-top: 5%;
  width: 70%;
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
