<template>
  <header class="cabecalho">
    <header-logged :rotas=rotas v-if="userIsLogged" />
    <header-not-logged :rotas=rotas v-else/>
    <a href="#">Sair</a> 
    <locale-changer />
    
  </header>
</template>

<script>
import ChangeLang from '../select/ChangeLang.vue'
import HeaderLogged from '../header/HeaderLogged.vue'
import HeaderNotLogged from '../header/HeaderNotLogged.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    'locale-changer': ChangeLang,
    'header-logged': HeaderLogged,
    'header-not-logged': HeaderNotLogged
  },
  computed: {
    ...mapGetters(['userIsLogged'])
  },
  data () {
    return {
      active: false
    }
  },

  props: {
    rotas: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scope>
.cabecalho {
  align-items: center;
  background: #f9f9f9;
  display: flex;
  justify-content: space-between;
  padding-left: 2rem;
  padding-right: 2rem;
}

.menu {
  display: flex;
}

.menu-lista {
  display: flex;
}

.menu-item {
  list-style: none;
}

.menu-item:last-child a {
  margin-right: 0;
}

.menu-link {
  color: #808080;
  margin-right: 1.25rem;
  text-decoration: none;
  text-transform: capitalize;
}

.router-link-exact-active {
  color: #333333;
  font-weight: bold;
}

.menu-link:hover {
  text-decoration: underline;
}

@media screen and (min-width: 0) {
  .menu-lista {
    display: block;
    text-align: center;
  }
}

@media screen and (min-width: 768px) {
  .menu-lista {
    display: flex;
  }
}

@media screen and (min-width: 0) {
  .menu {
    display: block;
    width: 100%;
    height: 150px;
  }
}

@media screen and (min-width: 768px) {
  .menu {
    display: flex;
    height: auto;
  }
}

@media screen and (min-width: 0) {
  .menu-item {
    list-style: none;
    padding: 5px;
  }
}

@media screen and (min-width: 768px) {
  .menu-item {
    list-style: none;
  }
}
@media screen and (max-width: 768px) {
  .cabecalho {
    padding-bottom: 0.7em;
  }
  .menu-link {
    color: #808080;
    margin-right: 0rem;
    text-decoration: none;
    text-transform: capitalize;
  }
}
</style>
