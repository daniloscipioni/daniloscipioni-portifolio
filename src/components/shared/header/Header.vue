<template>
  <header class="cabecalho">
    <nav class="menu">
      <ul class="menu-lista">
        <li class="menu-item" v-for="rota in rotas" :key="rota.path">
          <router-link :to="rota.path ? rota.path : '/'" class="menu-link">
            {{ $t(rota.title) }}</router-link
          >
        </li>
      </ul>
    </nav>
    <locale-changer />
  </header>
</template>

<script>
import ChangeLang from '../select/ChangeLang.vue'

export default {
  components: {
    'locale-changer': ChangeLang
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
